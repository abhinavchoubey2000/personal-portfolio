const { profileModel } = require("../database/models/profileModel");

const fetchProfile = async (req, res) => {
	try {
		res.status(200).json({ message: "Fetched profile data", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

const updateProfile = async (req, res) => {
	try {
		res.status(200).json({ message: "Profile updated", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

module.exports = { fetchProfile, updateProfile };
