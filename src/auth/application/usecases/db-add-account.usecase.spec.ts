import { IEncrypter } from '../../domain/interfaces/encrypter.interface'
import DbAddAccountUsecase from './db-add-account.usecase'

type SutTypes = {
  sut: DbAddAccountUsecase
  encrypterStub: IEncrypter
}
const makeEncrypter = (): IEncrypter => {
  class EncrypterStub implements IEncrypter {
    async encrypt(value: string): Promise<string> {
      return new Promise((resolve) => resolve('hashed_password'))
    }
  }
  return new EncrypterStub()
}
const makeSut = (): SutTypes => {
  const encrypterStub = makeEncrypter()
  const sut = new DbAddAccountUsecase(encrypterStub)
  return {
    sut,
    encrypterStub
  }
}
describe('DbAddAccountUsecase', () => {
  test('should call Encrypter with correct password', () => {
    const { sut, encrypterStub } = makeSut()
    const encryptSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name: 'valid_name',
      email: 'valid_email',
      password: 'valid_password'
    }
    sut.add(accountData)
    expect(encryptSpy).toHaveBeenCalledWith('valid_password')
  })
})
