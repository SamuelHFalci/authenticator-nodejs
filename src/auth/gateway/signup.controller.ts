import { MissingParamError } from "../../@shared/errors/missing-param-error";
import { IController } from "../../@shared/gateway/controller.interface";
import { IHttpRequest, IHttpResponse } from "../../@shared/gateway/http";
import { badRequest } from "../../@shared/helpers/http-helper";

export class SignUpController implements IController {
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
  }
}
