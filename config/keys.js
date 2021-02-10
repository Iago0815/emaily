if (process.env.NODE_ENV === "production") {
  module.exports = require("./prod");
} else {
  module.exports = require("./dev");
}

//G O O G L E
//googleClientID: 1092862111241-pgd8d687tcu08149dnifqc30figs3blg.apps.googleusercontent.com
//googleClientSecret: UTwgDj0kO_jaXx_C4rp8Mh4r

//G O O G L E   P R O D
//googleClientID: 312284760722-2d3a6v8p7takj714645mgv3oo96lt6p7.apps.googleusercontent.com
//googleClientSecret: CfD8UASXegUg13WtTW4xwRlz

//F A C E B O O K
//APP-ID: 2877832625807250
//

//MONGO DB connection string: mongodb+srv://iago1234:<password>@emaily.9k9bf.mongodb.net/<dbname>?retryWrites=true&w=majority
//user: iago1234
//pwd: jC4YNLuVY89SIn75

//MONGO DB PROD
//mongodb+srv://iago1234:<password>@emaily-prod.jultb.mongodb.net/<dbname>?retryWrites=true&w=majority
//user: iago1234
//pwd: Mo55LsUzhl6reTI9

//mongodb+srv://iago1234:Mo55LsUzhl6reTI9@emaily-prod.jultb.mongodb.net/prod_emaily_db?retryWrites=true&w=majority
