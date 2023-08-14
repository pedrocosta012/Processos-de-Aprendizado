import { mongoHelper as sut } from '../../../../../src/infra/db/helper/mongoHelper';
import env from '../../../../../src/main/config/env';

describe('Mongo Helper', () => {
    beforeAll(async () => {
        await sut.connect(env.mongoUrlConnectionTest);
    });

    afterAll(async () => {
        await sut.disconnect();
    });

    it('Should reconnect if mongodb is down', async () => {
        let accountCollection = await sut.getCollection('accounts');
        expect(accountCollection).toBeTruthy();
        await sut.disconnect();
        accountCollection = await sut.getCollection('accounts');
        expect(accountCollection).toBeTruthy();
    });
});
