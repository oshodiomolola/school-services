const mongoose = require("mongoose");
require("dotenv").config();

function connectToDatabase() {
  mongoose.connect(process.env.DB_CONNECTION);
  mongoose.connection.on("connected", () => {
    console.log("Connected to database successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error occured while connecting to database");
  });
}

module.exports = { connectToDatabase };
