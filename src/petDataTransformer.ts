import { parse } from "date-fns";
import { PetData } from "./petSource";
import fs from 'fs-extra';
import sharp from 'sharp';

const lang = process.env.SITE_LANGS;

export interface PetDataRawReader {
  getRawPetRecords(input: string): Promise<Record<string, string[]>>;
}

export function transformIntoPetData(petConfig: Record<string,string>, cardPetTextData: Record<string, string[]>, title: string,
  folderId: string, folderName: string, thumbnailName: string, imagesForCarousel: string[], knowmeId: string): PetData {

  const dateFormat = petConfig['date_format'] || 'dd/MM/yyyy';
  const allLangs = petConfig['lang_order'].split('/');
  let langIndexInPetData = allLangs.map((lang: string) => lang.trim()).findIndex((l) => l == lang);
  if (langIndexInPetData === -1) {
    langIndexInPetData = 0;
  }
  const birthdateString = cardPetTextData[petConfig["birthdate"]][0] || "";
  const birthdate = parseDate(birthdateString, dateFormat);

  return {
    folderId: folderId,
    folderName: folderName,
    title: title,
    thumbnail: thumbnailName,
    description: cardPetTextData[petConfig['description']][langIndexInPetData] || '',
    sex: cardPetTextData[petConfig['sex']][langIndexInPetData] || '',
    birthdate: birthdate,
    status: cardPetTextData[petConfig['adoption_status']][langIndexInPetData] || '',
    images: imagesForCarousel,
    knowme: knowmeId,
    normalizedName: normalize(title),
    family: cardPetTextData[petConfig['family']]?.[langIndexInPetData] || '',
    furColors: cardPetTextData[petConfig['colors']]?.[langIndexInPetData] || '',
    breed: cardPetTextData[petConfig['breed']]?.[langIndexInPetData] || '',
    health: cardPetTextData[petConfig['health']]?.[langIndexInPetData] || '',
    eyeColor: cardPetTextData[petConfig['eye_color']]?.[langIndexInPetData] || '',
    weight: cardPetTextData[petConfig['weight']]?.[langIndexInPetData] || '',
    personality: cardPetTextData[petConfig['personality']]?.[langIndexInPetData] || '',
    neutered: cardPetTextData[petConfig['neutered']]?.[langIndexInPetData] || '',
    vaccinated: cardPetTextData[petConfig['vaccinated']]?.[langIndexInPetData] || '',
    lastVaccinationDate: cardPetTextData[petConfig['last_vaccination_date']]?.[0] || '',
    vaccinationType: cardPetTextData[petConfig['vaccination_type']]?.[langIndexInPetData] || '',
  };
}

export function normalize(input: string): string {
  return input.normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
}

function parseDate(dateString: string, dateFormat: string): Date | undefined {
  try {
    const date = parse(dateString, dateFormat, new Date());
    date.setHours(12, 0, 0, 0); // FIXME: to avoid some weirdness in dates formatting we set the time to midday
    return date;
  } catch (error) {
    console.error("Error parsing date:", error);
  }
}

export async function imageResize(inputPath: string, outputPath = inputPath): Promise<void> {
  try {
    const processedBuffer = await sharp(inputPath)
      .resize({ width: 1080 })
      .jpeg({ quality: 75 })
      .withMetadata({ orientation: undefined })
      .toBuffer();

    await fs.writeFile(outputPath, processedBuffer);
  } catch (error) {
    console.error('Error processing image:', error);
  }
}