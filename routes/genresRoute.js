const express = require("express");
const managebooksController = require("../controllers/manage booksController");
const genresRoute = express.genresRoute();

genresRoute.get("/", managebooksController.handeGreeting);

genresRoute.get("/", managebooksController.handleGetAllauthors);

module.exports = genresRoute;