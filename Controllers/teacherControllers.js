const teacherDataSchema = require("../dataBase/schema");

const addTeacher = async (req, res) => {
  let data = {
    teacherName: req.body.teacherName,
    age: req.body.age,
    dateOfBirth: req.body.dateOfBirth,
    classesCount: req.body.classesCount,
  };
  try {
    const newTeacher = new teacherDataSchema(data);
    await newTeacher.save();
    res.status(200).json({
      message: "Teacher record added successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Error in adding teacher record",
    });
  }
};

const getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherDataSchema.find();
    res.status(200).json({
      message: "Teacher records fetched successfully",
      data: teachers,
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Error in fetching teacher record",
    });
  }
};

const updateTeacher = async (req, res) => {
  try {
    let updatedData = {
      teacherName: req.body.teacherName,
      age: req.body.age,
      dateOfBirth: req.body.dateOfBirth,
      classesCount: req.body.classesCount,
    };
    const updateTeacher = await teacherDataSchema.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );
    res.status(200).json({
      message: "Teacher record updated successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({
      message: "Error in updating teacher record",
    });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    const teacher = await teacherDataSchema.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Teacher record deleted successfully",
    });
  } catch (error) {
    console.log("error", error);
    res.status(400).json({
      message: "Error in deleting teacher record",
    });
  }
};

module.exports = { addTeacher, getAllTeachers, updateTeacher, deleteTeacher };
