import { DbAddAccount } from '../../../src/data/useCases/dbAddAccount';

describe('DbAddAccount UseCase', () => {
    it('Should call encrypter with correct password', async () => {
        class EncrypterStub {
            async encrypt(): Promise<string> {
                return new Promise((resolve) => resolve('hashed_password'));
            }
        }
        const encrypterStub = new EncrypterStub();
        const sut = new DbAddAccount(encrypterStub);
        const encryptSpy = jest.spyOn(encrypterStub, 'encrypt');
        const accountData = {
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'valid_password'
        };
        await sut.add(accountData);
        expect(encryptSpy).toHaveBeenCalledWith(accountData.password);
    });
});