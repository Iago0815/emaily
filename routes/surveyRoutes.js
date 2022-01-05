const mongoose = require("mongoose");
const requireLogin = require("../middelwares/requireLogin");
const requireCredits = require("../middelwares/requireCredits");
const SibMailer = require("sib-api-v3-sdk");
const surveyTemplate =
  require("../services/emailTemplates/surveyTemplate").default;

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    const mailer = new SibMailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};
