import { v4 as uuidv4 } from 'uuid';
import { readItems, writeItems } from './itemModel.js';

export async function getAllItems() {
  return await readItems();
}

export async function getItemById(id) {
  const items = await readItems();
  return items.find(item => item.id === id);
}

export async function createItem(data) {
  const items = await readItems();
  const newItem = { id: uuidv4(), ...data };
  items.push(newItem);
  await writeItems(items);
  return newItem;
}

export async function updateItem(id, updates) {
  const items = await readItems();
  const updatedItems = items.map(item =>
    item.id === id ? { ...item, ...updates } : item
  );
  await writeItems(updatedItems);
  return updatedItems.find(item => item.id === id);
}

export async function deleteItem(id) {
  const items = await readItems();
  const filtered = items.filter(item => item.id !== id);
  await writeItems(filtered);
  return { deleted: id };
}
