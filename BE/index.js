const express = require("express");
const cors = require("cors");

const products = require("./db.json");
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome our to online shop API...");
});
app.get("/products", (req, res) => {
  res.send(products);
});

app.listen(8000, console.log(`Server running on port ${8000}`));
