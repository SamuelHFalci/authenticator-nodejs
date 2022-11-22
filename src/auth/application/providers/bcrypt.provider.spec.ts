import bcrypt from 'bcrypt'
import { BcryptProvider } from './bcrypt.provider'
describe('Bcrypt Provider', () => {
  test('should call bcrypt with correct values', async () => {
    const sut = new BcryptProvider()
    const hashSpy = jest.spyOn(bcrypt, 'hash')
    await sut.encrypt('any_value')
    expect(hashSpy).toHaveBeenCalledWith('any_value', 12)
  })
})