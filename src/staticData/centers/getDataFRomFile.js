import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function readJsonFile(number) {
  // Ensure the input is a valid number
  if (typeof number !== 'number' || number < 1 || number > 300) {
    throw new Error('Input must be a number between 1 and 300');
  }

  // Construct the filename
  const filename = `data_${number}.json`;
  const filePath = path.join(__dirname, filename);

  try {
    // Read the file synchronously
    const rawData = fs.readFileSync(filePath, 'utf8');

    // Parse the JSON data
    const jsonData = JSON.parse(rawData);

    return jsonData;
  } catch (error) {
    // Handle potential errors (file not found, invalid JSON, etc.)
    console.error(`Error reading file ${filename}:`, error);
    return null;
  }
}
