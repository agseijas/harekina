import fs from 'fs-extra';
import { drive_v3 } from 'googleapis';
import { CSVPetDataReader } from './csvPetDataReader.js';

const reader = new CSVPetDataReader();

async function exportSheetAsCsv(drive: drive_v3.Drive, spreadsheetId: string, outputPath: string): Promise<void> {
  // Export the file as CSV (assuming it's a single-sheet spreadsheet).
  const res = await drive.files.export(
    {
      fileId: spreadsheetId,
      mimeType: 'text/csv'
    },
    { responseType: 'stream' }
  );

  return new Promise((resolve, reject) => {

    const dest = fs.createWriteStream(outputPath);

    dest
      .on('finish', () => {
        console.log(`CSV write to ${outputPath}`);
      })
      .on('error', (err: Error) => {
        console.error('Error writing file:', err);
        reject(err);
      })
      .on('close', () => {
        console.log(`File stream closed and flushed to ${outputPath}`);
        resolve();
      });

    res.data
      .on('end', () => {
        console.log(`CSV exported to ${outputPath}`);
      })
      .on('error', (err: Error) => {
        console.error('Error exporting CSV:', err);
        reject(err);
      })
      .pipe(dest);
  });
}

export async function readPetInfoDataFromGoogleSheet(spreadsheetId: string, drive: drive_v3.Drive, outputCSVPath =  `./${spreadsheetId}.csv`): Promise<Record<string, string[]>> {

  try {
    await exportSheetAsCsv(drive, spreadsheetId, outputCSVPath);

    return reader.getRawPetRecords(outputCSVPath);
  } catch (err) {
    console.error('Error processing sheet:', err);
    throw err;
  }
}
