import { Encrypter } from '../../../src/data/protocols/encrypter';
import { DbAddAccount } from '../../../src/data/useCases/dbAddAccount';

const makeEncrypter = (): Encrypter => {
    class EncrypterStub {
        async encrypt(): Promise<string> {
            return new Promise((resolve) => resolve('hashed_password'));
        }
    }
    return new EncrypterStub();
};

interface SutTypes {
    sut: DbAddAccount
    encrypterStub: Encrypter
}

const makeSut = (): SutTypes => {
    const encrypterStub = makeEncrypter();
    const sut = new DbAddAccount(encrypterStub);
    return {
        sut,
        encrypterStub
    };
};

describe('DbAddAccount UseCase', () => {
    it('Should call encrypter with correct password', async () => {
        const { sut, encrypterStub } = makeSut();
        const encryptSpy = jest.spyOn(encrypterStub, 'encrypt');
        const accountData = {
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'valid_password'
        };
        await sut.add(accountData);
        expect(encryptSpy).toHaveBeenCalledWith(accountData.password);
    });

    it('Should throw if Encrypter throws', async () => {
        const { sut, encrypterStub } = makeSut();
        jest.spyOn(encrypterStub, 'encrypt').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
        const accountData = {
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'valid_password'
        };
        const promise = sut.add(accountData);
        await expect(promise).rejects.toThrow();
    });
});
