const bookService = require('../services/books.service');

// GET all books
exports.getAllBooks = (req, res) => {
  const data = bookService.getAllBooks();
  res.json({ data });
};

// GET book by ID
exports.getBookById = (req, res) => {
  const book = bookService.getBookById(req.params.id);
  res.json({ data: book });
};