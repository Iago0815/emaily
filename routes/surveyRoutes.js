const mongoose = require("mongoose");
const requireLogin = require("../middelwares/requireLogin");
const requireCredits = require("../middelwares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.post("api/surveys", requireLogin, requireCredits, (req, res) => {
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

    // great place to send an email
    const mailer = new Mailer(survey, surveyTemplate(survey));
    mailer.send();
  });
};

//API key sendgrid: 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
