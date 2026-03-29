const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false },
  eventDetails: {
    eventType: { type: String, required: true }, // e.g., Wedding, Engagement
    eventDate: { type: Date, required: true },
    location: { type: String, required: true },
  },
  services: [{ 
    name: String, 
    price: Number 
  }], // Array of selected services from your grid
  enhancements: {
    hasDJ: { type: Boolean, default: false },
    hasCatering: { type: Boolean, default: false },
    extraNotes: String
  },
  totalEstimate: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'], 
    default: 'Pending' 
  },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);