const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Book', BookSchema);
