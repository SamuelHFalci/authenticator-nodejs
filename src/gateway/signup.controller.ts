import { IController } from '../domain/gateway/controller.interface'
import { IHttpRequest, IHttpResponse } from '../domain/gateway/http'
import { MissingParamError, InvalidParamError } from '../application/errors'
import { IAddAccountUsecase } from '../domain/usecase/add-account.usecase.interface'
import { IEmailValidator } from '../domain/validators/email-validator'
import { badRequest, ok, serverError } from '../helpers/http-helper'

export class SignUpController implements IController {
  constructor(
    private readonly emailValidator: IEmailValidator,
    private readonly addAccountUsecase: IAddAccountUsecase
  ) {}
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const requiredFileds = [
        'name',
        'email',
        'password',
        'passwordConfirmation'
      ]
      for (const field of requiredFileds) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }
      const { email, password, passwordConfirmation, name } = httpRequest.body
      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }
      const isEmailValid = this.emailValidator.isValid(email)
      if (!isEmailValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account = await this.addAccountUsecase.add({
        name,
        email,
        password
      })
      return ok(account)
    } catch (error) {
      return serverError()
    }
  }
}
