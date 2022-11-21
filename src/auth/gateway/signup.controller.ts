import { InvalidParamError } from "../../@shared/errors/invalid-param-error";
import { MissingParamError } from "../../@shared/errors/missing-param-error";
import { IController } from "../../@shared/gateway/controller.interface";
import { IHttpRequest, IHttpResponse } from "../../@shared/gateway/http";
import { badRequest } from "../../@shared/helpers/http-helper";
import { IEmailValidator } from "../domain/validators/email-validator";

export class SignUpController implements IController {
  constructor(private readonly emailValidator: IEmailValidator) {}
  handle(httpRequest: IHttpRequest): IHttpResponse {
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
    const isEmailValid = this.emailValidator.isValid(httpRequest.body.email);
    if (!isEmailValid) {
      return badRequest(new InvalidParamError("email"));
    }
  }
}
