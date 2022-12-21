// import express for performing fet and post request
const express = require("express");
// initialize the app
const app = express();
// import body Parser to parse the information present in body header
const bodyParser = require("body-parser");
// give the port number where you want to start your application
const port = 3000;
// set the engine for template of EJS Type
app.set("view engine", "EJS");
// apply body parser to the app
app.use(bodyParser.urlencoded({ extended: true }));
// apply css to the app
app.use(express.static("public"));
// to store the result
var result = "";
// to store the weight
var weight = "";
// to store the height
var height = "";
// to store the age
var age = " ";
// to get the request and response
app.get("/", (req, res) => {
  // top render the EJS File
  res.render("list", {
    result: result,
    weight: weight,
    height: height,
    age: age,
  });
});

// to post the request and response
app.post("/", (req, res) => {
  // store current value in age variable
  age = parseInt(req.body.age);
  // store current value in weight variable
  weight = parseInt(req.body.weight);
  // store current value in height variable
  height = parseInt(req.body.height);
  // calculate bmi
  heightInMeterSquared = (height * height) / 10000;
  bmi = weight / heightInMeterSquared;

  // fix it to 2 decimal places
  bmi = bmi.toFixed(1);
  // store it to result string
  result = `Your BMI Result is: ${bmi} `;
  // redirect to the present page
  res.redirect("/");
});

// to listen the app on a port
app.listen(port, (req, res) => {
  console.log(`The App is listening at ${port}`);
});
