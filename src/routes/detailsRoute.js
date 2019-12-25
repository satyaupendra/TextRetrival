const express = require("express");
const detailsRouter = express.Router();
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./data.txt");
const data = fs.readFileSync(filePath, { encoding: "utf-8" });
const conversion = require("../config/convertJSON");
let result = conversion(data);
console.log(result);
detailsRouter.route("/").post((req, res) => {
  //console.log(req.body);
  const { search } = req.body;
  console.log(search);
  let newArray = result.filter(function(el) {
    return (
      el.phoneNo.toLowerCase() == search.toLowerCase() ||
      search.toLowerCase() == el.name.toLowerCase()
    );
  });
  if (newArray.length > 0) {
    //console.log(newArray);
    res.render("results", { newArray });
  } else {
    res.render("noresults");
  }
});
module.exports = detailsRouter;
