const mongoose = require('mongoose');
require('dotenv').config();

const verify = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const Booking = require('./models/Booking');
    const count = await Booking.countDocuments();
    console.log(`TOTAL BOOKINGS IN DB: ${count}`);
    const latest = await Booking.findOne().sort({ createdAt: -1 });
    console.log('LATEST BOOKING:', JSON.stringify(latest, null, 2));
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

verify();
