const authorsModel = require("../models/authorsModel");

const handleGreeting = (req, res) => {
    res.send("hello from manage books controller");
};

const handleGetAllAuthors = (req, res) => {
    const authorsData = authorsModel.getAllauthors();
    res.json(authorsData);
};

const manageBooksController = {
    handleGreeting,
    handleGetAllAuthors,
};

module.exports = manageBooksController;
