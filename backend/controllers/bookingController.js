const Booking = require('../models/Booking');

// Create a new booking from the 4-step wizard
exports.createBooking = async (req, res) => {
  try {
    const { eventDetails, services, enhancements, totalEstimate } = req.body;
    
    const newBooking = new Booking({
      user: req.user ? req.user.id : null, 
      eventDetails,
      services,
      enhancements,
      totalEstimate
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// Get all bookings (For Admin Dashboard)
exports.getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().populate('user', 'name email');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching bookings" });
  }
};