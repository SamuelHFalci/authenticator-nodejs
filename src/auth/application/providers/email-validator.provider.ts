import { IEmailValidator } from "../../domain/validators/email-validator";
import validator from "validator";
export class EmailValidatorProvider implements IEmailValidator {
  isValid(email: string): boolean {
    return validator.isEmail(email);
  }
}
