const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health Check
app.get('/', (req, res) => res.send('Radhey Events API is Running!'));

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected for Radhey Events"))
  .catch(err => console.log(err));

// Routes
app.use('/api/bookings', require('./routes/bookingRoutes'));
app.use('/api/users', require('./routes/userRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));