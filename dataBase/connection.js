const mongoose = require("mongoose");

const connectToDataBase = async function () {
  try {
    const uri =
      "mongodb+srv://srinith:hmEq1RRQ2W9bCJ3f@cluster0.ggoqz7o.mongodb.net/?retryWrites=true&w=majority";
    mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected to database  successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDataBase;
