import express from 'express';
import {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
} from '../utils/itemViewModel.js';
import { verifyToken } from '../utils/auth.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const items = await getAllItems();
  res.json(items);
});

router.get('/:id', async (req, res) => {
  const item = await getItemById(req.params.id);
  item ? res.json(item) : res.status(404).json({ error: 'Item not found' });
});

router.post('/', (req, res) => {
  try {
    verifyToken(req.headers);
    createItem(req.body).then(item => res.status(201).json(item));
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

router.put('/:id', (req, res) => {
  try {
    verifyToken(req.headers);
    updateItem(req.params.id, req.body).then(item => res.json(item));
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    verifyToken(req.headers);
    deleteItem(req.params.id).then(result => res.json(result));
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
});

export default router;
