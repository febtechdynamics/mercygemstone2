const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI).then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    });
  } catch (err) {
    console.error(err.message);
  }
};
module.exports = connectDB;
