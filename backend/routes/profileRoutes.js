const express = require("express");
const {
	fetchProfile,
	updateProfile,
} = require("../controllers/profileControllers");
const profileRouter = express.Router();

profileRouter.route("/fetch").get(fetchProfile);
profileRouter.route("/update").patch(updateProfile);

module.exports = { profileRouter };
