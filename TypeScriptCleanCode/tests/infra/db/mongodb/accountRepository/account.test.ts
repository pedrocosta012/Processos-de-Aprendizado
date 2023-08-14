import { AccountMongoRepository } from '../../../../../src/infra/db/mongodb/accountRepository/account';
import env from '../../../../../src/main/config/env';
import { mongoHelper } from '../../../../../src/infra/db/helper/mongoHelper';

const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository();
};

describe('Account Mongo Repository', () => {
    beforeAll(async () => {
        await mongoHelper.connect(env.mongoUrlConnectionTest);
    });

    afterAll(async () => {
        await mongoHelper.disconnect();
    });

    beforeEach(async () => {
        const accountCollection = mongoHelper.getCollection('account');
        await accountCollection.deleteMany({});
    });

    it('Should return an account on success', async () => {
        const sut = makeSut();
        const account = await sut.add({
            name: 'any_name',
            email: 'any_email@mail.com',
            password: 'any_password'
        });

        expect(account).toBeTruthy();
        expect(account.id).toBeTruthy();
        expect(account.name).toBe('any_name');
        expect(account.email).toBe('any_email@mail.com');
        expect(account.password).toBe('any_password');
    });
});
