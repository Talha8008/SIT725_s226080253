const mongoose = require('mongoose');

// connect to DB
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// same schema as serve.js
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number
});

const Book = mongoose.model('Book', bookSchema);

// sample data (your own — different from prac ✔)
const sampleBook = new Book({
  title: "The Psychology of Money",
  author: "Morgan Housel",
  year: 2020
});

// save to DB
sampleBook.save()
.then(() => {
  console.log("Sample book saved!");
  mongoose.connection.close();
});