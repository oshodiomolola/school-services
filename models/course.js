const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: { type: String, required: true },
  school: { type: Schema.Types.ObjectId, ref: "School", required: true }
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;
