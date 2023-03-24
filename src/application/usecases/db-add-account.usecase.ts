import { IEncrypter } from '../../domain/interfaces/encrypter.interface'
import { IAccountModel } from '../../domain/models/account'
import {
  IAddAccountModel,
  IAddAccountUsecase
} from '../../domain/usecase/add-account.usecase.interface'
import { IAddAccountRepository } from '../../domain/repository/add-account.repository.interface'

export default class DbAddAccountUsecase implements IAddAccountUsecase {
  constructor(
    private readonly encrypter: IEncrypter,
    private readonly addAccountRepository: IAddAccountRepository
  ) {}
  async add(account: IAddAccountModel): Promise<IAccountModel> {
    const hashedPassword = await this.encrypter.encrypt(account.password)
    const newAccount = await this.addAccountRepository.add(
      Object.assign({}, account, { password: hashedPassword })
    )
    return new Promise((resolve) => resolve(newAccount))
  }
}
