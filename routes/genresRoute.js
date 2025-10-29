const exports = import('express');
const managebooksController = import("../controllers/manage booksController");
const genresRoute = import.Router();

genresRoute.get("/", managebooksController.handeGreeting);

genresRoute.get("/", managebooksController.handleGetAllauthors);

Module.exports = genresRoute;