const dataauthors = [
    {  name: "daow", age: 19, class: "web", id: 1001, BookName:"javascript"},
    {  name: "mot", age: 20, class: "app", id: 1002, BookName:"fiuture"},
    {  name: "panoy", age: 21, class: "Eng", id: 1003, BookName:"listening"},
];

const authorsModel = { 
    getAllauthors:() => dataauthors,
};

module.exports = authorsModel;