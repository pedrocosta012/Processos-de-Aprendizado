import request from 'supertest';
import app from '../../../src/main/config/app';
import { faker } from '@faker-js/faker';
import { mongoHelper } from '../../infra/db/mongodb/helper/mongoHelper';
import env from '../../../src/main/config/env';

describe('SignUp Routes', () => {
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

    test('Should enable CORS', async () => {
        const fakeUserPassword = faker.internet.password();
        await request(app).post('/signup').send({
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: fakeUserPassword,
            passwordConfirmation: fakeUserPassword
        }).expect(200);
    });
});
