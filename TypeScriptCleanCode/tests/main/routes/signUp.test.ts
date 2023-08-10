import request from 'supertest';
import app from '../../../src/main/config/app';
import { faker } from '@faker-js/faker';

describe('SignUp Routes', () => {
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
