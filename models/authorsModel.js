const dataauthors = [
    { name: "daow", age: 19, class: "web" },
    { name: "mot", age: 20, class: "app" },
    { name: "panoy", age: 21, class: "Eng" },
];

const authorsModel = { 
    getAllauthorss:() => dataauthors,
};

module.exports = authorsModel;