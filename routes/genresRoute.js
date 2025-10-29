const express = Require("express");
const managebooksController = require("../controllers/manage booksController");
const genresRoute = express.Router();

genresRoute.get("/", managebooksController.handeGreeting);

genresRoute.get("/", managebooksController.handleGetAllauthors);

module.exports = genresRoute;