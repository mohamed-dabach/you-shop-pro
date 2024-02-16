const express = require("express");
const productsRouter = require("./routes/products");
const mongoose = require("./database");
const app = express();

app.use(express.json());
app.use("/products", productsRouter);

module.exports = app;
