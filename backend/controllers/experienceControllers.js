const { profileModel } = require("../database/models/profileModel");

const addNewExperience = async (req, res) => {
	try {
		res.status(200).json({ message: "New experience added", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

const deleteExperience = async (req, res) => {
	try {
		res.status(200).json({ message: "Experience deleted", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

const updateExperience = async (req, res) => {
	try {
		res.status(200).json({ message: "Experience updated", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

module.exports = { addNewExperience, deleteExperience, updateExperience };
