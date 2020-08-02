const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"));

app.use(expressurlencoded({ extended: true }));
app.use(express.json());

const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engoin", "handlebars");

const routes = require("./controllers/jobs.js");

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server listening on : http://localhost: ${PORT}`);
});
