const express = require("express");
const apiRouter = require("./apiRoute");

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Use the imported router for all paths
app.use("/", apiRouter);

app.listen(port, () => {
    console.log(`Lao-Top API running at http://localhost:${port}`);
});