import { InvalidParamError, MissingParamError } from "../../@shared/errors";
import { IController } from "../../@shared/gateway/controller.interface";
import { IHttpRequest, IHttpResponse } from "../../@shared/gateway/http";
import { badRequest, serverError } from "../../@shared/helpers/http-helper";
import { IEmailValidator } from "../domain/validators/email-validator";

export class SignUpController implements IController {
  constructor(private readonly emailValidator: IEmailValidator) {}
  handle(httpRequest: IHttpRequest): IHttpResponse {
    try {
      const requiredFileds = [
        "name",
        "email",
        "password",
        "passwordConfirmation",
      ];
      for (const field of requiredFileds) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field));
        }
      }
      const { email, password, passwordConfirmation } = httpRequest.body;
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError("passwordConfirmation"));
      }
      const isEmailValid = this.emailValidator.isValid(email);
      if (!isEmailValid) {
        return badRequest(new InvalidParamError("email"));
      }
    } catch (error) {
      return serverError();
    }
  }
}
