const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// In-memory quotes
let quotes = [
"The best way to predict the future is to invent it.",
"Life is 10% what happens to us and 90% how we react to it.",
"The only limit to our realization of tomorrow is our doubts of today.",
"Do not wait to strike till the iron is hot; but make it hot by striking."
];

// GET random quote
app.get('/api/quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  res.json({ quote: quotes[randomIndex] });
});

// POST add new quote
app.post('/api/quote', (req, res) => {
  const { quote } = req.body;

  if (!quote) {
    return res.status(400).json({ error: "Quote is required" });
  }

  quotes.push(quote);
  res.json({ message: "Quote added successfully", quote });
});

// ADD two numbers using query parameters
app.get('/add', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  // check if numbers are valid
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Invalid numbers" });
  }

  const sum = a + b;

  res.json({
    number1: a,
    number2: b,
    result: sum
  });
});
// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});