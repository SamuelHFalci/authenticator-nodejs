import bcrypt from 'bcrypt'
import { IEncrypter } from '../../domain/interfaces/encrypter.interface'
export class BcryptProvider implements IEncrypter {
  constructor(private readonly salt: number = 12) {}

  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
