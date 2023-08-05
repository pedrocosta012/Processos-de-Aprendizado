import bcrypt from 'bcrypt';

import { BcryptAdapter } from '../../../src/infra/criptocraphy/bcryptEncripter';

describe('Bcrypt Adapter', () => {
    it('Should call bcrypt with correct values', async () => {
        const salt = 12;
        const sut = new BcryptAdapter(12);
        const hashSpy = jest.spyOn(bcrypt, 'hash');
        await sut.encrypt('any_value');
        expect(hashSpy).toHaveBeenCalledWith('any_value', salt);
    });
});
