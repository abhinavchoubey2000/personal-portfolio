const mongoose = require("mongoose");
const schema = new mongoose.Schema({
	name: String,
	title: String,
	location: String,
	shortBio: String,
	fullBio: String,
	profilePicture: {
		url: String,
		publicId: String,
	},
	skills: [],
	education: [],
	experience: [],
	socialLinks: {
		github: String,
		linkedIn: String,
		instagram: String,
		mail: String,
	},
	projects: [],
});

const profileModel = mongoose.model("profile", schema);

module.exports = { profileModel };
