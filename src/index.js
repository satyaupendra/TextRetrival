const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const indexRoute = require("./routes/indexRoute");
const ejs = require("ejs");
const detailsRoute = require("./routes/detailsRoute");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "./views"));

app.use("/", indexRoute);
app.use("/details", detailsRoute);
app.get("*", (req, res) => {
  res.render("noresults");
});
const server = app.listen(process.env.PORT, () => {
  console.log("Server Running in port", server.address().port);
});
