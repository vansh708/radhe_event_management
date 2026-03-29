const express = require('express');
const router = express.Router();
const { createBooking, getAllBookings } = require('../controllers/bookingController');
const { protect, admin } = require('../middleware/authMiddleware');

// Public/User Route: Create a booking (Must be logged in)
router.post('/', createBooking);

// Admin Route: Get all bookings for the dashboard
router.get('/admin/all', protect, admin, getAllBookings);

module.exports = router;