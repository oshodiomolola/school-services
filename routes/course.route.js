const express = require("express");
const controller = require("../controllers/school.controller");
const courseController = require("../controllers/course.controller");

const courseRouter = express.Router();

courseRouter.post("/create/:schoolId", courseController.createCourse);
courseRouter.put("/update/:id", courseController.updateCourse);
courseRouter.get("/view/:schoolId", courseController.viewCourse);
courseRouter.delete("/delete/:id", courseController.deleteCourse);

module.exports = { courseRouter }