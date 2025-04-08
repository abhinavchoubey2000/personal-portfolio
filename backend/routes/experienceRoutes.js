const express = require("express");
const {
	addNewExperience,
	deleteExperience,
	updateExperience,
} = require("../controllers/experienceControllers");
const experienceRouter = express.Router();

experienceRouter.route("/add").post(addNewExperience);
experienceRouter.route("/delete").delete(deleteExperience);
experienceRouter.route("/update").patch(updateExperience);

module.exports = { experienceRouter };
