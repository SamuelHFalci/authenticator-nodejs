import { IEncrypter } from '../../domain/interfaces/encrypter.interface'
import { IAccountModel } from '../../domain/models/account'
import {
  IAddAccountModel,
  IAddAccountUsecase
} from '../../domain/usecases/add-account.usecase.interface'

export default class DbAddAccountUsecase implements IAddAccountUsecase {
  constructor(private readonly encrypter: IEncrypter) {}
  async add(account: IAddAccountModel): Promise<IAccountModel> {
    await this.encrypter.encrypt(account.password)
    return new Promise((resolve) => resolve(null))
  }
}
