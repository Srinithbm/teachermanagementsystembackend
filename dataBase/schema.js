const mongoose = require("mongoose");

const teacherManagementSystemSchema = new mongoose.Schema({
  teacherName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  classesCount: {
    type: Number,
    required: true,
  },
});

const teacherDataSchema = mongoose.model(
  "teacherData",
  teacherManagementSystemSchema
);
module.exports = teacherDataSchema;
