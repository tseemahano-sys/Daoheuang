const exports = import('express');
const managebooksController = require("../controllers/manage booksController");
const genresRoute = exports.Router();

genresRoute.get("/", managebooksController.handeGreeting);

genresRoute.get("/", managebooksController.handleGetAllauthors);

module.exports = genresRoute;