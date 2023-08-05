import { AddAccountRepository } from '../../../src/data/protocols/addAccountRepository';
import { Encrypter } from '../../../src/data/protocols/encrypter';
import { DbAddAccount } from '../../../src/data/useCases/dbAddAccount';
import { AccountModel } from '../../../src/domain/models/account';
import { AddAccountModel } from '../../../src/domain/useCases/addAccount';

const makeEncrypter = (): Encrypter => {
    class EncrypterStub {
        async encrypt(): Promise<string> {
            return new Promise((resolve) => resolve('hashed_password'));
        }
    }
    return new EncrypterStub();
};

const makeAddAccountRepository = (): AddAccountRepository => {
    class AddAccountRepositoryStub implements AddAccountRepository {
        async add(account: AddAccountModel): Promise<AccountModel> {
            const fakeAccount = {
                id: 'valid_id',
                name: 'valid_name',
                email: 'valid_email@mail.com',
                password: 'hashed_password'
            };
            return new Promise((resolve) => resolve(fakeAccount));
        }
    }
    return new AddAccountRepositoryStub();
};

interface SutTypes {
    sut: DbAddAccount
    encrypterStub: Encrypter
    addAccountRepositoryStub: AddAccountRepository
}

const makeSut = (): SutTypes => {
    const encrypterStub = makeEncrypter();
    const addAccountRepositoryStub = makeAddAccountRepository();
    const sut = new DbAddAccount(encrypterStub, addAccountRepositoryStub);
    return {
        sut,
        encrypterStub,
        addAccountRepositoryStub
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

    it('Should call AddAccountRepository with correct values', async () => {
        const { sut, addAccountRepositoryStub } = makeSut();
        const addSpy = jest.spyOn(addAccountRepositoryStub, 'add');
        const accountData = {
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'valid_password'
        };
        await sut.add(accountData);
        expect(addSpy).toHaveBeenCalledWith({
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'hashed_password'
        });
    });

    it('Should throw if AddAccountRepository throws', async () => {
        const { sut, addAccountRepositoryStub } = makeSut();
        jest.spyOn(addAccountRepositoryStub, 'add').mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
        const accountData = {
            name: 'valid_name',
            email: 'valid_email@mail.com',
            password: 'valid_password'
        };
        const promise = sut.add(accountData);
        await expect(promise).rejects.toThrow();
    });
});
