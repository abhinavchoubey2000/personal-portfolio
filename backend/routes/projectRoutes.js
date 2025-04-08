const express = require("express");
const projectRouter = express.Router();
const {
	addNewProject,
	deleteProject,
	updateProject,
} = require("../controllers/projectControllers");

projectRouter.route("/add").post(addNewProject);
projectRouter.route("/delete").delete(deleteProject);
projectRouter.route("/update").patch(updateProject);

module.exports = { projectRouter };
