const express = require("express");
const apiRouter = require("./routes/apiRoute");
const app = express();
const port = 3000;

// Use the imported router for all paths
app.use("/",apiRouter);

app.listen(port, () => {
    console.log(`book Library API running at http://localhost:${port}`);
});