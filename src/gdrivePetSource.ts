import fs from 'fs-extra';
import { GoogleAuth, JWT } from 'google-auth-library';
import { JSONClient } from 'google-auth-library/build/src/auth/googleauth.js';
import { drive_v3, google } from 'googleapis';
import path from 'path';
import { CARD_IMAGE_FILENAME, IMAGES_DIR, OUTPUT_DIR } from './generateSite.js';
import { imageResize, normalize, transformIntoPetData } from './petDataTransformer.js';
import { readPetInfoDataFromGoogleSheet } from './petInfoGoogleSheet.js';
import { DEFAULT_PET_CONFIG, Folder, PetData, PetInfoSource } from './petSource.js';

const SERVICE_ACCOUNT_FILE = path.join(process.cwd(), 'credentials.json');
const FOLDER_MIME = 'application/vnd.google-apps.folder';
const SHEET_MIME = 'application/vnd.google-apps.spreadsheet';

const DRIVE_PARENT_FOLDER_ID = process.env.DRIVE_PARENT_FOLDER;
if (!DRIVE_PARENT_FOLDER_ID) {
  throw new Error("Environment variable 'DRIVE_PARENT_FOLDER' is not set.");
}

export class GoogleDriveSource implements PetInfoSource {

  private drive?: drive_v3.Drive;
  private petConfig?: Record<string, string>;

  async authenticate() {
    if (!this.drive) {
      const auth: GoogleAuth<JSONClient> = new google.auth.GoogleAuth({
        keyFile: SERVICE_ACCOUNT_FILE,
        scopes: ['https://www.googleapis.com/auth/drive.readonly', 'https://www.googleapis.com/auth/spreadsheets.readonly']
      });
      this.drive = google.drive({ version: 'v3', auth: await auth.getClient() as JWT });
      this.petConfig = await this.getGlobalConfiguration();
    }
  }

  async getPetsData(): Promise<PetData[]> {
    await this.authenticate();

    await fs.ensureDir(OUTPUT_DIR);
    await fs.ensureDir(IMAGES_DIR);

    // List all subfolders in the parent folder.
    const subfolders = await this.listSubfolders();
    console.log(`Found ${subfolders.length} subfolder(s).`);

    const cards: PetData[] = [];
    for (const folder of subfolders) {
      const card = await this.processSubfolder(folder);
      if (card) {
        cards.push(card);
      }
    }
    return cards;
  }


  private async getGlobalConfiguration(): Promise<Record<string, string>> {

    const res = await this.drive!!.files.list({
      q: `(name='petconfig.csv' or name contains 'logo') and '${DRIVE_PARENT_FOLDER_ID}' in parents`,
      fields: 'files(id, name)'
    });

    const petConfigFile = res.data.files?.find(file => file.name === 'petconfig.csv');
    let config = DEFAULT_PET_CONFIG;

    if (petConfigFile) {
      const fileId = petConfigFile.id!;
      const destPath = path.join(OUTPUT_DIR, 'petconfig.csv');
      await this.downloadFile(fileId, destPath);

      const content = await fs.readFile(destPath, 'utf-8');
      const lines = content.split('\n').filter(line => line.trim());
      const config: Record<string, string> = {};

      for (const line of lines) {
        const [key, value] = line.split(',').map(part => part.trim());
        if (key && value) {
          config[key] = value;
        }
      }

      console.log('Pet config:', config);
    } else {
      console.warn(`No petconfig.csv found in the parent folder.`);
      console.warn(`You can create a petconfig.csv file in the parent folder to override the default values.`);
    }

    const logoFile = res.data.files?.find(file => /^logo\.\w+$/i.test(file.name || ''));
    if (logoFile) {
      const logoPath = path.join(IMAGES_DIR, logoFile.name!!);
      await fs.ensureDir(IMAGES_DIR);
      await this.downloadFile(logoFile.id!!, logoPath);
      console.log(`Logo file downloaded to: ${logoPath}`);
    } else {
      console.warn(`No logo file found in the parent folder.`);
    }

    return config;
  }

  private async listSubfolders(parentId = DRIVE_PARENT_FOLDER_ID) {
    let folders: Folder[] = [];
    let pageToken: string | undefined = undefined;

    do {
      const res: { data: drive_v3.Schema$FileList } = await this.drive!!.files.list({
        q: `'${parentId}' in parents and mimeType='${FOLDER_MIME}'`,
        fields: 'nextPageToken, files(id, name)',
        pageToken
      });

      const files = res.data.files;
      if (files && files.length > 0) {
        // Map the results to our Folder interface (using non-null assertion because id and name are required)
        folders = folders.concat(files.map(file => ({
          id: file.id!,
          name: file.name!
        })));
      }
      pageToken = res.data.nextPageToken || undefined;
    } while (pageToken);

    return folders;
  }

  private async listFilesInFolder(folderId: string) {
    const res = await this.drive!!.files.list({
      q: `'${folderId}' in parents`,
      fields: 'files(id, name, mimeType)'
    });
    console.log('files List Response:', res);
    return res.data.files || [];
  }

  private async downloadFile(fileId: string, destination: string) {
    const destStream = fs.createWriteStream(destination);
    const res = await this.drive!!.files.get({ fileId, alt: 'media' }, { responseType: 'stream' });
    return new Promise<void>((resolve, reject) => {
      res.data
      .on('error', err => reject(err))
        .pipe(destStream);
      destStream
        .on('finish', () => {
          console.log(`File downloaded to: ${destination}`);
          resolve();
        })
        .on('error', err => {
          console.error('Error writing file:', err);
          reject(err);
        });
    });
  }

  private async processSubfolder(folder: drive_v3.Schema$File): Promise<PetData | null> {
    const files = await this.listFilesInFolder(folder.id!!);

    // Find the spreadsheet file (assuming one per subfolder)
    const sheetFile = files.find(file => file.mimeType === SHEET_MIME);
    if (!sheetFile) {
      console.warn(`No spreadsheet found in subfolder: ${folder.name}`);
      return null;
    }
    const sheetFileId = sheetFile.id || ""

    const thumbnail = files.find(file => file.name?.toLowerCase().startsWith(CARD_IMAGE_FILENAME));
    if (!thumbnail) {
      console.warn(`No image '${CARD_IMAGE_FILENAME}.*' found in subfolder: ${folder.name}`);
      return null;
    }
    else {
      console.log(`Found image '${folder.name}/${thumbnail.name}'`);
    }

    const allImages = files.filter(file => file.mimeType && file.mimeType.startsWith('image/'));

    // Read the spreadsheet values (assuming the spreadsheet has a header row or key-value pairs in columns A and B)
    const cardPetTextData = await readPetInfoDataFromGoogleSheet(sheetFileId, this.drive!!);

    const folderName = normalize(folder.name!!);
    const folderImageDir = path.join(IMAGES_DIR, folderName);
    await fs.ensureDir(folderImageDir);

    await this.downloadImage(folderImageDir, thumbnail);
    const imagesForCarousel:string[] = [];
    for (const image of allImages) {
      const name = `${image.id}.${this.getFileExtension(image.name!!)}`
      await this.downloadImage(folderImageDir, image, name);
      imagesForCarousel.push(name);
    }

    let title = (cardPetTextData[this.petConfig!!['name']][0] || folder.name)!!.trim(); // Fallback to folder name if name not found
    console.log(`Processed folder: ${folder.name} (Title: ${title})`);

    return transformIntoPetData(this.petConfig!!, cardPetTextData, title, folder.id!!, folderName, thumbnail.name!!, imagesForCarousel, sheetFileId);
  }

  private async downloadImage(targetFolder: string, imageFile: drive_v3.Schema$File, name: string = imageFile.name!!) {
    const localImagePath = path.join(targetFolder, name);
    await this.downloadFile(imageFile.id || "", localImagePath);

    await imageResize(localImagePath);
  }

  private getFileExtension(fileName: string): string {
    const dotIndex = fileName.lastIndexOf('.');
    if (dotIndex !== -1 && dotIndex < fileName.length - 1) {
      return fileName.substring(dotIndex + 1).toLowerCase();
    }
    return 'jpg';
  }

}
