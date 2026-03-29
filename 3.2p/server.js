const express = require("express");
const app = express();


app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.get('/api/books', (req, res) => {
  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear"
    },
    {
      title: "Clean Code",
      author: "Robert C. Martin"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho"
    }
  ];

  res.json(books);
});

app.listen(port, () => {
  console.log("App listening on port: " + port);
});