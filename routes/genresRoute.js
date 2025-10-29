const express = require('express');
const managebooksController = import("../controllers/manage booksController");
const genresRoute = express.Router();

genresRoute.get("/", managebooksController.handeGreeting);

genresRoute.get("/", managebooksController.handleGetAllauthors);

Module.exports = genresRoute;