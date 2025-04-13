import fs from 'fs-extra';

export interface Folder {
  id: string;
  name: string;
}

export interface PetData {
  folderId: string;
  folderName: string;
  sex: string;
  title: string;
  thumbnail: string;
  images: string[];
  description: string;
  birthdate?: Date;
  status: string;
  knowme: string;
  normalizedName: string;
  family?: string;
  furColors?: string;
  breed?: string;
  eyeColor?: string;
  weight?: string;
  personality?: string;
  health?: string;
  neutered?: string;
  vaccinated?: string;
  lastVaccinationDate?: string;
  vaccinationType?: string;
}

export interface PetInfoSource {
  authenticate(): Promise<any>;
  getPetsData(): Promise<PetData[]>;
}

export const DEFAULT_PET_CONFIG = await defaultPetConfig();

async function defaultPetConfig(): Promise<Record<string, string>> {
  const configFilePath = `src/petconfig.csv`;
  const content = await fs.readFile(configFilePath, 'utf-8');
  const lines = content.split('\n').filter(line => line.trim());
  const config: Record<string, string> = {};

  for (const line of lines) {
    const [key, value] = line.split(',').map(part => part.trim());
    if (key && value) {
      config[key] = value;
    }
  }

  return config;
}