import { AccountMongoRepository } from '../../../../../src/infra/db/mongodb/accountRepository/account';
import { mongoHelper } from '../helper/mongoHelper';
import 'dotenv/config';

const makeSut = (): AccountMongoRepository => {
    return new AccountMongoRepository();
};

describe('Account Mongo Repository', () => {
    beforeAll(async () => {
        await mongoHelper.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/jest-${process.env.MONGO_DATABASE}`);
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
