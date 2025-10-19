const express = require('express');
const cors = require('cors');
require('dotenv').config();
const routes = require('./routes/routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Test route
app.get('/', (req, res) => {
  res.json({ message: 'Server đang chạy!' });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server chạy trên port ${PORT}`);
});