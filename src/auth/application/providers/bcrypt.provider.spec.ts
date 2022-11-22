import bcrypt from 'bcrypt'
import { BcryptProvider } from './bcrypt.provider'
jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return new Promise((resolve) => resolve('hash'))
  }
}))
const makeSut = (): BcryptProvider => {
  return new BcryptProvider()
}
describe('Bcrypt Provider', () => {
  test('should call bcrypt with correct values', async () => {
    const sut = makeSut()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', 12)
  })
  test('should return a hash on success', async () => {
    const sut = makeSut()
    const hash = await sut.encrypt('any_value')
    expect(hash).toBe('hash')
  })
})
