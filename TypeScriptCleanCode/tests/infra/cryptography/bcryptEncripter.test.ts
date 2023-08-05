import bcrypt from 'bcrypt';

import { BcryptAdapter } from '../../../src/infra/cryptography/bcryptEncripter';
import { Encrypter } from '../../../src/data/protocols/encrypter';

jest.mock('bcrypt', () => ({
    async hash(): Promise<string> {
        return new Promise((resolve) => resolve('hash_value'));
    }
}));

const salt = 12;
const makeSut = (): Encrypter => {
    return new BcryptAdapter(salt);
};

describe('Bcrypt Adapter', () => {
    it('Should call bcrypt with correct values', async () => {
        const sut = makeSut();
        const hashSpy = jest.spyOn(bcrypt, 'hash');
        await sut.encrypt('any_value');
        expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });

    it('Should return a hash if success', async () => {
        const sut = makeSut();
        const hash = await sut.encrypt('any_value');
        expect(hash).toBe('hash_value');
    });

    it('Should throw if bcrypt throws', async () => {
        const sut = makeSut();
        jest.spyOn(bcrypt, 'hash').mockImplementationOnce(async () => new Promise((resolve, reject) => reject(new Error())));
        const promise = sut.encrypt('any_value');
        await expect(promise).rejects.toThrow();
    });
});
