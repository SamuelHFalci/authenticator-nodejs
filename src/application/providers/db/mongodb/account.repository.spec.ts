import { MongoClient } from 'mongodb'
import { AccountMongoRepository } from './account.repository'
const makeSut = (): AccountMongoRepository => {
  return new AccountMongoRepository()
}
describe('Account MongoDb Repository', () => {
  let client: MongoClient
  beforeAll(async () => {
    client = await MongoClient.connect(process.env.MONGO_URL)
  })
  afterAll(async () => {
    await client.close()
  })
  test('should return an account on success', async () => {
    const sut = makeSut()
    const account = {
      name: 'any_name',
      email: 'any_email@mail.com',
      password: 'any_password'
    }
    const newAccount = await sut.add(account)
    expect(newAccount).toBeTruthy()
    expect(newAccount.id).toBeTruthy()
    expect(newAccount.name).toBe('any_name')
    expect(newAccount.email).toBe('any_email@mail.com')
    expect(newAccount.password).toBe('any_password')
  })
})
