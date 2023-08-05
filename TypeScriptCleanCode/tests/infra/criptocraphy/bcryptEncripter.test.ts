import bcrypt from 'bcrypt';

import { BcryptAdapter } from '../../../src/infra/criptocraphy/bcryptEncripter';

jest.mock('bcrypt', () => ({
    async hash(): Promise<string> {
        return new Promise((resolve) => resolve('hash_value'));
    }
}));

describe('Bcrypt Adapter', () => {
    it('Should call bcrypt with correct values', async () => {
        const salt = 12;
        const sut = new BcryptAdapter(salt);
        const hashSpy = jest.spyOn(bcrypt, 'hash');
        await sut.encrypt('any_value');
        expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });

    it('Should return a hash if success', async () => {
        const salt = 12;
        const sut = new BcryptAdapter(salt);
        const hash = await sut.encrypt('any_value');
        expect(hash).toBe('hash_value');
    });
});
