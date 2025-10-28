const exports = require('express');
const managebooksController = require("../controllers/manage booksController");
const genresRoute = exports.Router();

genresRoute.get("/", managebooksController.handeGreeting);

genresRoute.get("/", managebooksController.handleGetAllauthors);

module.exports = genresRoute;