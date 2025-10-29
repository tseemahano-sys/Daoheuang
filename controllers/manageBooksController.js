const authorsModel = require("../models/authorsModel");

const handleGreeting = (req, res) => {
    const managedata = manageBooksModel.getManagedata();
    res.send("hello from manage books controller");
};

const handleGetAllAuthors = (req, res) => {
    const authorsData = authorsModel.getAllAuthors();
    res.json(authorsData);
};

const manageBooksController = {
    handleGreeting,
    handleGetAllAuthors,
};

module.exports = manageBooksController;
