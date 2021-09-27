const { Error } = require("mongoose");
const keys = require("../config/keys");

const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.mailgunKey || "key-240e9594ab65aa8482abfcc4ed2a9534",
  url: "https://api.mailgun.net",
});

class MailgunMailer {
  constructor({ subject, recipients }, content) {
    this.data = {
      from: "no-reply@YOUR_ADDRESS.com",
      to: this.formatAddresses(recipients),
      subject: subject,
      html: content,
    };
  }

  formatAddresses(recipients) {
    return recipients.map(({ email }) => email).join(",");
  }

  async send() {
    try {
      const resp = await mg.messages.create(
        process.env.MailgunDomain,
        this.data
      );

      return resp;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = MailgunMailer;
