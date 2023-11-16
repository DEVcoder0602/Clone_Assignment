const mongoose = require("mongoose");
require("dotenv").config();

const dbConnection = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log("Attempting to connect to MongoDB with URI:", mongoURI);
    await mongoose.connect(mongoURI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = dbConnection;
