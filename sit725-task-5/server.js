const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
const bookRoutes = require('./routes/books.routes');
app.use('/api/books', bookRoutes);

// Root route (optional but useful)
app.get('/', (req, res) => {
  res.send('Welcome to Books API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});