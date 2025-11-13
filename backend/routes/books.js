const express = require('express');
const Book = require('../models/book');
const auth = require('../middleware/auth');
const permit = require('../middleware/role');

const router = express.Router();

// everyone (authenticated) can view all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// admin only: add book
router.post('/', auth, permit('admin'), async (req, res) => {
  try {
    const { title, author, description } = req.body;
    const book = new Book({ title, author, description });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;