import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dataPath = path.join(__dirname, '../data/items.json');

export async function readItems() {
  const data = await fs.readFile(dataPath, 'utf-8');
  return JSON.parse(data || '[]');
}

export async function writeItems(items) {
  await fs.writeFile(dataPath, JSON.stringify(items, null, 2));
}
