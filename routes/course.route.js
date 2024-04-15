const express = require("express");
const controller = require("../controllers/school.controller");
const courseController = require("../controllers/course.controller");

const courseRouter = express.Router();

courseRouter.post("/create/:schoolId", courseController.createCourse);
courseRouter.put("/update/:courseId", courseController.updateCourse);
courseRouter.get("/view/:schoolId", courseController.viewCourse);
courseRouter.delete("/delete/:courseId", courseController.deleteCourse);

module.exports = { courseRouter }