const express = require("express");
const router = express.Router();

const app = express();
const port = 3000;

// Middleware
app.use(express.json);

// Use the imported router for all paths
app.use("/",router);

app.listen(port, () => {
    console.log(`book Library API running at http://localhost:${port}`);
}); 