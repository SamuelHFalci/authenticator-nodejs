import { MissingParamError } from "../../@shared/errors/missing-param-error";
import { HttpRequest, HttpResponse } from "../../@shared/gateway/http";
import { badRequest } from "../../@shared/helpers/http-helper";

export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissingParamError("name"));
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissingParamError("email"));
    }
  }
}
