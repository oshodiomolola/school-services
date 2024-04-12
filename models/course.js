const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
  name: { type: String, required: true },
  schoolId: { type: Schema.Types.ObjectId, ref: "School", unique: false }
});

const Course = mongoose.model("Course", CourseSchema);

module.exports = { Course };
