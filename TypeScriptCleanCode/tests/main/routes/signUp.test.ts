import { faker } from '@faker-js/faker';
import request from 'supertest';

import app from '../../../src/main/config/app';
import env from '../../../src/main/config/env';
import { mongoHelper } from '../../../src/infra/db/helper/mongoHelper';

describe('SignUp Routes', () => {
    beforeAll(async () => {
        await mongoHelper.connect(env.mongoUrlConnectionTest);
    });

    afterAll(async () => {
        await mongoHelper.disconnect();
    });

    beforeEach(async () => {
        const accountCollection = await mongoHelper.getCollection('account');
        await accountCollection.deleteMany({});
    });

    it('Should enable CORS', async () => {
        const fakeUserPassword = faker.internet.password();

        const apiRequest = request(app);
        await apiRequest.post('/signup').send({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: fakeUserPassword,
            passwordConfirmation: fakeUserPassword
        }).expect(200);
    }, 10000);
});
