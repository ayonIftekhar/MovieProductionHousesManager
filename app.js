//external imports
const bodyParser = require("body-parser");
const path = require("path");
const dotenv = require("dotenv");

//importing routers
const logIn = require(".//Routers/logIn");
const buet = require("./Routers/buet");
const buetDepartments = require("./Routers/buetDepartments");
const buetPrereq = require("./Routers/buetPrereq");
const buetupdate = require("./Routers/buetupdate");


//creating app with express
const express = require('express');
const app = express();
const port = 3000;

//setting view engine
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.json());
app.use(express.urlencoded());
dotenv.config();

//all the pages that need to be routeda
app.use(express.static(path.join(__dirname,'public')));
app.use("/" , logIn);
app.use("/buet" , buet);
app.use("/buet/departments" , buetDepartments);
app.use("/buet/prereq" , buetPrereq);
app.use("/buet/update" , buetupdate);

// Start the server and listen on port 3000
app.listen(port, () => {
  console.log("Server is running");
});