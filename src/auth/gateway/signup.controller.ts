import { MissingParamError } from "../../@shared/errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../../@shared/gateway/http";
import { badRequest } from "../../@shared/helpers/http-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFileds = ["name", "email", "password"];
    for (const field of requiredFileds) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field));
      }
    }
  }
}
