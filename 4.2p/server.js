const express = require("express");
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number  
});

const Book = mongoose.model('Book', bookSchema);


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('/api/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

app.post('/api/books', async (req, res) => {
  const { title, author, year } = req.body;

  const newBook = new Book({ title, author, year });
  await newBook.save();

  res.json({ message: "Book added", newBook });
});

app.listen(port, () => {
  console.log("App listening on port: " + port);
});