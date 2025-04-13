// src/generateSite.ts

import * as ejs from 'ejs';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import * as gdrive from './gdrivePetSource.js';
import * as localPS from './localPetSource.js';
import { PetData, PetInfoSource } from './petSource.js';
import { CONTACT_ADDRESSES, TEXTS } from './texts.js';

const sourceType = process.env.SOURCE_TYPE || 'gdrive';

const lang = process.env.SITE_LANGS as keyof typeof TEXTS | undefined;
console.log('lang: ', lang);

const langTitles = lang && lang in TEXTS ? TEXTS[lang] : TEXTS.es;

// Local output directories
export const OUTPUT_DIR = path.join(process.cwd(), 'site');
export const IMAGES_DIR = path.join(OUTPUT_DIR, 'images');

export const CARD_IMAGE_FILENAME = '1.';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateIndexHtml(pets: PetData[], socials: Record<string, string>) {

  console.log('Generating index.html...');
  await fs.ensureDir(OUTPUT_DIR);
  await fs.ensureDir(IMAGES_DIR);

  generateHtml('main.ejs', 'index.html', {
    ...langTitles,
    lang,
    pets,
    socials
  });
}

async function generateKnowmePages(pets: PetData[], socials: Record<string, string>) {
  for (const pet of pets) {
    const htmlFilename = `${pet.normalizedName}_${pet.knowme}.html`;

    generateHtml('knowme.ejs', htmlFilename, { ...langTitles, lang, pet, contactAddresses: CONTACT_ADDRESSES, socials: socials });
  }
}

async function generateLegalWarningHtml(socials: Record<string, string>) {

  console.log('Generating legal-warning.html...');
  await fs.ensureDir(OUTPUT_DIR);
  await fs.ensureDir(IMAGES_DIR);

  generateHtml('legal-warning.ejs', 'legal-warning.html', { ...langTitles, lang: lang, socials: socials });
}

async function generateHtml(inputFile: string, outputFile: string, config: any = {}, templatesPath: string = '../src/templates') {
  const templatePath = path.join(__dirname, `${templatesPath}/${inputFile}`);

  const htmlOutput = await ejs.renderFile(templatePath, config, {
    views: [path.join(__dirname, templatesPath)]
  });

  await fs.writeFile(path.join(OUTPUT_DIR, outputFile), htmlOutput, 'utf8');
  console.log(`${outputFile} generated successfully.`);
}

async function generateCSS() {
  const cssSourceDir = path.join(process.cwd(), 'src', 'styles');
  const cssOutputDir = path.join(OUTPUT_DIR, 'styles');

  await fs.ensureDir(cssOutputDir);
  await fs.copy(cssSourceDir, cssOutputDir);
  console.log('CSS files copied successfully.');
}

// ----- Main Process -----
async function generateStaticSite() {
  try {
    if(sourceType !== 'gdrive' && sourceType !== 'local') {
      throw new Error(`Invalid SOURCE_TYPE: ${sourceType}. Use 'gdrive' or 'local'.`);
    }
    const petSource: PetInfoSource = sourceType === 'gdrive' ? new gdrive.GoogleDriveSource() : new localPS.LocalPetSource();
    const pets = (await petSource.getPetsData())
      .sort(() => Math.random() - 0.5); //random sorting the pets so that some aren't always on top

    if (pets.length === 0) {
      console.warn('No valid subfolders processed.');
      return;
    }
    console.log(`Cards: `, JSON.stringify(pets, null, 2));

    const socials = {
      fb: CONTACT_ADDRESSES.facebook,
      ig: CONTACT_ADDRESSES.instagram,
      yt: CONTACT_ADDRESSES.youtube,
    }

    await generateIndexHtml(pets, socials);
    await generateLegalWarningHtml(socials);
    await generateKnowmePages(pets, socials);
    // Copy all CSS files to the output directory
    await generateCSS();

    console.log('Static site generated in the "site" folder.');

  } catch (err) {
    console.error('Error generating static site.');
    throw err;
  }
}

generateStaticSite();
