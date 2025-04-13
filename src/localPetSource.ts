import fs from 'fs-extra';
import { DEFAULT_PET_CONFIG, PetData, PetInfoSource } from "./petSource.js";
import { imageResize } from './petDataTransformer.js';

export class LocalPetSource implements PetInfoSource {

  constructor(private dataFilePath = './local_drive', private destination = './site/images', private petConfig = DEFAULT_PET_CONFIG) {}

  async authenticate() {}

  async getPetsData(): Promise<PetData[]> {

    const petFoldersInLocalDrive = await fs.readdir(this.dataFilePath);
    const imageFiles: string[] = [];
    for (const fileOrFolder of petFoldersInLocalDrive) {
      const folderPath = `${this.dataFilePath}/${fileOrFolder}`;
      if ((await fs.stat(folderPath)).isDirectory()) {
        const filesInFolder = await fs.readdir(folderPath);
        const imagesInFolder = filesInFolder.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
        for (const image of imagesInFolder) {
          const sourcePath = `${folderPath}/${image}`;
          const destinationPath = `${this.destination}/${fileOrFolder}/${image}`;
          await fs.ensureDir(`${this.destination}/${fileOrFolder}`);
          await fs.copy(sourcePath, destinationPath);
          imageFiles.push(destinationPath);
          await imageResize(destinationPath);
        }
      }
      else if (/^logo\.(jpg|jpeg|png|gif)$/i.test(fileOrFolder)) {
        const sourcePath = `${this.dataFilePath}/${fileOrFolder}`;
        const destinationPath = `${this.destination}/${fileOrFolder}`;
        await fs.copy(sourcePath, destinationPath);
      }
    }

    //TODO: Does nothing at the moment.
    const csvFiles = petFoldersInLocalDrive.filter(file => /\.csv$/i.test(file));
    for (const file of csvFiles) {
      const csvContent = await fs.readFile(`${this.dataFilePath}/${file}`, 'utf-8');
      console.log(`Content of ${file}:`, csvContent);
    }

    return [
      {
        folderId: "1_yrrvDuPV9nkU4_MvykqjtacbxK0QtTt",
        folderName: "Telerin",
        title: "Telerín",
        thumbnail: "1.jpg",
        sex: "male",
        description: "The golden retriever cat",
        birthdate: new Date("2022-02-01"),
        status: "adopted",
        images: [
          "1CurtG0vPvBMHV9T4vOlPF1SgdmOQaewS.jpg"
        ],
        knowme: "1WlHLNhkFvh3qNYD0SOSHk85knncXGnvgJ_k6XXOMfsM",
        normalizedName: "Telerin"
      },
      {
        folderId: "Chari-2fvlE3m10",
        folderName: "Chari Duo",
        title: "Chari Duo",
        thumbnail: "1.jpg",
        sex: "female",
        description: "dual cat",
        birthdate: new Date("2023-02-01"),
        status: "something",
        images: [
          "1H_XOAL3Foyf10A4IyI-FqGpv647NXAv2.jpg"
        ],
        knowme: "Chari-Nxfpmb2k9WzC4",
        normalizedName: "Chari Duo"
      },
      {
        folderId: "Churi-2fvlE3m10",
        folderName: "Churi",
        title: "Churi",
        thumbnail: "1.jpg",
        sex: "female",
        description: "Churi",
        birthdate: new Date("2023-02-01"),
        status: "whatever",
        images: [
          "1H_XOAL3Foyf10A4IyI-FqGpv647NXAv2.jpg"
        ],
        knowme: "Churi-Nxfpmb2k9WzC4",
        normalizedName: "Churi"
      },
      {
        folderId: "1_v3TK9Lt9ed67EY3CcD7O1-2fvlE3m10",
        folderName: "Chori",
        title: "Chori",
        sex: "male",
        thumbnail: "1.jpg",
        description: "Same personality as Flow, the cat from the movie",
        birthdate: new Date("2023-02-01"),
        status: "in a home but not adopted",
        images: [
          "1H_XOAL3Foyf10A4IyI-FqGpv647NXAv2.jpg"
        ],
        knowme: "1uyHnehkLPOTAK9Ct3tPZhccNoeNGF-Nxfpmb2k9WzC4",
        normalizedName: "Chori"
      },
      {
        folderId: "11hUxvyugAGkA-_fi87R8yAIZ7834t49X",
        folderName: "Colin",
        title: "Colín",
        sex: "male",
        thumbnail: "1.jpeg",
        description: "Very annoying when he's hungry, but we love him",
        birthdate: new Date("2022-02-01"),
        status: "adopted",
        images: [
          "1gKP-f0DZI5GjJXIJFBKCKWCsXElSCtsY.jpeg",
          "1rfZpGy3JhffuYWYpZbWqfuXGmDNh21de.jpeg"
        ],
        knowme: "1-2V90fNoL68BnjnKkBSWZQ-_MujnYW-2ReA69oO7W2c",
        normalizedName: "Colin"
      },
      {
        folderId: "Calin-_fi87R8yAIZ7834t49X",
        folderName: "Calin",
        title: "Calín",
        sex: "female",
        thumbnail: "1.jpeg",
        description: "Not annoying at all",
        birthdate: new Date("2022-02-01"),
        status: "adopted",
        images: [
          "1gKP-f0DZI5GjJXIJFBKCKWCsXElSCtsY.jpeg",
          "1rfZpGy3JhffuYWYpZbWqfuXGmDNh21de.jpeg"
        ],
        knowme: "Calin-_MujnYW-2ReA69oO7W2c",
        normalizedName: "Calin"
      }
    ];
  }
}