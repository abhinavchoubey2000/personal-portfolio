const { profileModel } = require("../database/models/profileModel");

const addNewProject = async (req, res) => {
	try {
		res.status(200).json({ message: "New project added", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
};

const deleteProject = async(req, res)=>{
	try {
		res.status(200).json({ message: "Project deleted", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
}

const updateProject = async(req, res)=>{
	try {
		res.status(200).json({ message: "Project updated", success: true });
	} catch (error) {
		res.status(400).json({ success: false, message: error.message });
	}
}

module.exports = { addNewProject, deleteProject, updateProject };
