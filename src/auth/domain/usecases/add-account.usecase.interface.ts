import { IAccountModel } from "../models/account";

export interface IAddAccountModel {
  name: string;
  email: string;
  password: string;
}
export interface IAddAccountUsecase {
  add(account: IAddAccountModel): IAccountModel;
}
