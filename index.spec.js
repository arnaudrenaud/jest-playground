const { sendEmailToUser } = require(".");
const { sendEmail } = require("./email");

jest.mock("./email", () => {
  return {
    sendEmail: jest.fn(),
  };
});

describe("sendEmailToUser", () => {
  describe("when user has role CUSTOMER", () => {
    it("calls sendEmail with proper content", () => {
      sendEmailToUser({ role: "CUSTOMER", name: "Arnaud" });

      expect(sendEmail).toHaveBeenCalledWith(
        "Arnaud",
        "Title for customer email",
        ""
      );
    });
  });

  describe("when user has role ADMIN", () => {
    it("calls sendEmail with proper content", () => {
      sendEmailToUser({ role: "ADMIN", name: "Yousra" });

      expect(sendEmail).toHaveBeenCalledWith(
        "Yousra",
        "Title for admin email",
        ""
      );
    });
  });
});
