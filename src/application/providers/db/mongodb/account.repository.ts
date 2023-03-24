import { IAddAccountRepository } from '../../../../domain/repository/add-account.repository.interface'
import { IAddAccountModel } from '../../../../domain/usecase/add-account.usecase.interface'
import { IAccountModel } from '../../../../domain/models/account'

export class AccountMongoRepository implements IAddAccountRepository {
  async add(account: IAddAccountModel): Promise<IAccountModel> {
    return new Promise((resolve) => resolve(null))
  }
}
