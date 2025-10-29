const genresRoute = require("./genresRoute");

const express = Require("express");
const router = router("./route/genresRoute");

const app = express();
const port = 3000

// Use the imported router for all paths
app.use("/",genresRoute);

app.listen(port, () => {
    console.log(`book Library API running at http://localhost:${port}`);
}); 