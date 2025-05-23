const mongoose = require("mongoose");

const connectDatabase = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_URI);
		console.log("Database Connected!");
	} catch (error) {
		console.log(error);
	}
};

module.exports = { connectDatabase };
