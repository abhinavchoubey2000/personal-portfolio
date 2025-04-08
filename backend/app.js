const express = require("express");
const { projectRouter, experienceRouter, profileRouter } = require("./routes");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routers
app.use("/project", projectRouter);
app.use("/experience", experienceRouter);
app.use("/profile", profileRouter);

module.exports = app;
