import { EmailValidatorAdapter } from '../../src/utils/emailValidatorAdapter';

describe('EmailValidator Adapter', () => {
    it('Should return false if validator returns false', () => {
        const sut = new EmailValidatorAdapter();
        const isValid = sut.isValid('invalid_email@mail.com');
        expect(isValid).toBe(false);
    });
});
