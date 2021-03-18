//common JS modules
const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User.js");
require("./services/passport");

// authRoutes is a function that takes the app object and attaches the 2 routes to it and that's it

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

//Horku injects environtment variables
// if there is an environ var that has already been defined by horuku assign this var to port...
const PORT = process.env.PORT || 5000;

app.listen(PORT);
