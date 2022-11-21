import { IEmailValidator } from "../../domain/validators/email-validator";

export class EmailValidatorProvider implements IEmailValidator {
  isValid(email: string): boolean {
    return false;
  }
}
