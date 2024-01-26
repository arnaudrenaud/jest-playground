const { sendEmail } = require("./email");

function sendEmailToUser(user) {
  if (user.role === "CUSTOMER") {
    sendEmail(user.name, "Title for customer email", "");
  }
  if (user.role === "ADMIN") {
    sendEmail(user.name, "Title for admin email", "");
  }
}

module.exports = { sendEmailToUser };
