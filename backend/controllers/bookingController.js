const Booking = require('../models/Booking');

// Create a new booking from the 4-step wizard
exports.createBooking = async (req, res) => {
  try {
    const { eventDetails, services, enhancements, totalEstimate } = req.body;
    
    // Explicitly cast date to ensure Mongoose validation passes
    if (eventDetails && eventDetails.eventDate) {
      eventDetails.eventDate = new Date(eventDetails.eventDate);
    }

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
    console.error("Booking Creation Error:", error);
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