import { IAccountModel } from '../models/account'
import { IAddAccountModel } from './add-account.usecase.interface'

export interface IAddAccountRepository {
  add(account: IAddAccountModel): Promise<IAccountModel>
}
