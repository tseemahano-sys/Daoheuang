const express = require("express");
const managebooksController = require("../controllers/manage booksController");
const genresRoute = express.Router();

// Greeting at root
genresRoute.get("/", managebooksController.handleGreeting);

// Get all authors
genresRoute.get("/authors", managebooksController.handleGetAllAuthors);

module.exports = genresRoute;