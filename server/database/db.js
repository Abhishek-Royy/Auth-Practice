const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/authPractice";

const URI=process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log("Database connection Succesfull");
  } catch (error) {
    console.log("Failed to connect with database", error);
    process.exit(0);
  }
};

module.exports = connectDB;
