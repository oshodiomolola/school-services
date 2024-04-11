const express = require("express");
const controller = require("../controllers/school.controller");
const schoolRouter = express.Router();

schoolRouter.post("/create", controller.createSchool);
schoolRouter.put("/update/:id", controller.updateSchool);
schoolRouter.get("/view/:id", controller.viewSchool);
schoolRouter.get("/view", controller.viewSchools);

module.exports = { schoolRouter };
