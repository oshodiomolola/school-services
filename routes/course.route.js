const express = require("express");
const controller = require("../controllers/school.controller");
const courseController = require("../controllers/course.controller");

const courseRouter = express.Router();

courseRouter.post("/school/:schoolId/create", courseController.createCourse);
courseRouter.put("/update:id", courseController.updateCourse);
courseRouter.get("/school/:schoolId/view", courseController.viewCourse);
courseRouter.delete("/delete:id", courseController.deleteCourse);

module.exports = { courseRouter }