const mongoose = require("mongoose");

const url = "mongodb+srv://rohitbarate:*****@cluster0.d6guuf0.mongodb.net/test";

module.exports = () => {
  try {
    mongoose.connect(url, () => {
        console.log("successfully connected to mongoDB");
      });
  } catch (error) {
    console.log(" could not connect to mongoDB",error);
  }
};
