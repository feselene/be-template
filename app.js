const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware for parsing JSON bodies
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Sample route
app.get('/', (req, res) => {
  res.send('MongoDB and Node.js backend is working');
});

// Routes
app.use('/api/users', require('./routes/userRoutes'));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
