const authorsModel = require("../models/authorsModel");

const handeGreeting = (req, res) => {
    res.send("hello from manage books controller");
};

const handleGetAllauthors = (req, res) => {
    const getAllauthorss = authorsModel.getAllauthorss();
    res.json(getAllauthorss);
};

const managebooksController = {
    handeGreeting,
    handleGetAllauthors,
};

module.exports = managebooksController;
