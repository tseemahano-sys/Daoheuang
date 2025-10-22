const express = require("express");
const studentController = require("../controllers/studentController");
const apiRouter = express.Router();

// Root path: /
apiRouter.get("/", studentController.handleGreeting);

// Student path: /students
apiRouter.get("/students", studentController.handleGetStudents);

module.exports = apiRouter;