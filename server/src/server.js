const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const app = express();
const router = express.Router();
const fs = require("fs");
const userHandler = require('./controllers/userController');


app.use(bodyParser.json());  
app.use(express.static(path.join(__dirname + '/dist')));

let handler = (req, res) => res.sendFile(path.join(__dirname + '/dist/index.html'))
let routes = ["*","/main", "/registration", "/download", "/udid", "/login"]
routes.forEach(route => app.get(route, handler))

app.route("/login")
  .post(userHandler.login);

app.route("/register")
  .post(userHandler.register);

  app.route("/getJson")
  .post(userHandler.getJson);


app.listen(8081);