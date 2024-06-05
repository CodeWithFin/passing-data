import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var nameLength = ""
var topText = "Write your name below"
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{topText})
});

app.post("/submit", (req, res) => {
  nameLength = req.body["fName"].length + req.body["lName"].length;
  topText = `Your name has  ${nameLength} Characters`;
  res.render("index.ejs",{topText})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
