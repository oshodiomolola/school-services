const { Course } = require("../models/course");

const createCourse = async (req, res) => {
  try {
    const { schoolId } = req.params;
    const { name } = req.body;
    console.log("School ID:", req.params.schoolId);
    const course = new Course({ name, school: schoolId });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: "Internal server error" });
  }
};

const updateCourse = async (req, res, next) => {
  try {
    const { courseId } = req.params;
    const updateData = req.body;
    const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, {
      new: true,
    });
    return res
      .status(200)
      .json({
        message: "Courses has been updated successfully",
        updatedCourse,
      });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const viewCourse = async (req, res, next) => {
  try {
    let filter = {};
    const { schoolId } = req.params;
    const courses = await Course.find({ school: schoolId });
    return res
      .status(200)
      .json({ result: "Successful", message: "View courses" });
    next();
  } catch (err) {
    console.log("Error viewing courses:", err);
    res.status(500).json({ error: "Failed to get courses" });
  }
};

const deleteCourse = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const deletedCourse = await Course.findByIdAndDelete(courseId);
    return res
      .status(200)
      .json({ message: "Course has been deleted successfully", deletedCourse });
  } catch (err) {
    console.log("Error:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { createCourse, updateCourse, viewCourse, deleteCourse };
