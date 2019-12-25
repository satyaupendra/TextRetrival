const express = require("express");
const indexRouter = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./data.txt");
const data = fs.readFileSync(filePath, { encoding: "utf-8" });
const conversion = require("../config/convertJSON");
let result = conversion(data);
indexRouter.route("/").get((req, res) => {
  res.render("phoneBook", { result });
});

module.exports = indexRouter;
