const mongoose = require('mongoose');

const connectToDatabase = async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    autoCreate: false,
    autoIndex: false
  });
  console.log('Connected to MongoDB with Mongoose');
};

module.exports = connectToDatabase;