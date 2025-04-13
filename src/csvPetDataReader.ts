import { parse } from 'csv-parse';
import fs from 'fs-extra';
import { PetDataRawReader } from './petDataTransformer.js';

export class CSVPetDataReader implements PetDataRawReader {

  async getRawPetRecords(inputCSVFilePath: string): Promise<Record<string, string[]>> {
    try {
        const data = await parseCsvFile(inputCSVFilePath);
        const petData: Record<string, string[]> = {};

        data.forEach(([key, ...values]) => {
        if (key) {
            petData[key] = values.filter(value => value !== '');
        }
        });
        console.log('Pet data:', petData);
        // Optionally, remove the temporary file.
        await fs.remove(inputCSVFilePath);

        return petData;
    } catch (err) {
        console.error('Error processing sheet:', err);
        throw err;
    }
  }
}

async function parseCsvFile(filePath: string): Promise<string[][]> {
  const fileContent = await fs.readFile(filePath, 'utf8');
  console.log('CSV file content:', fileContent);
  return new Promise((resolve, reject) => {
    parse(fileContent, { trim: true }, (err, records: string[][]) => {
      if (err) {
        reject(err);
      } else {
        resolve(records);
      }
    });
  });
}
