//common JS modules
const express = require("express");

const app = express();

//app underlying express handler
//get rout handler
//http methods get
// "/" root route
// req = request, js object that represends the incoming request
// res = response
// app.listen: express tells node to listen to port 5000

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

//Horku injects environtment variables
// if there is an environ var that has already been defined by horuku assign this var to port...

const PORT = process.env.PORT || 5000;

app.listen(PORT);
