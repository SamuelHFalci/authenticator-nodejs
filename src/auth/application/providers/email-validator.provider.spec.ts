import { EmailValidatorProvider } from "./email-validator.provider";

describe("EmailValidator Adapter", () => {
  test("should return false if validator return false", () => {
    const sut = new EmailValidatorProvider();
    const isValid = sut.isValid("invalid_email@mail.com");
    expect(isValid).toBe(false);
  });
});
