const express = require("express");
const studentController = require("../controllers/studentController");
const managebooksController = require("../controllers/manageBooksController");

const apiRouter = express.Router();

// Root path: /
apiRouter.get("/", studentController.handleGreeting);
// apiRouter.get("/", managebooksController.handleGreeting);


// Student path: /students
apiRouter.get("/students", studentController.handleGetStudents);
apiRouter.get("/authors", managebooksController.handleGetAllAuthors);


module.exports = apiRouter;