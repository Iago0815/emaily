//Google resource manager: https://console.cloud.google.com/cloud-resource-manager?pli=1
//if s.b. visits the route  "/auth/google" they should be directed into the passport authentication flow.

const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get("/api/current_user", (req, res) => {
    res.send(req.user._id);
  });
};