import { DbAddAccount } from '../../data/useCases/dbAddAccount';
import { BcryptAdapter } from '../../infra/cryptography/bcryptEncrypter';
import { AccountMongoRepository } from '../../infra/db/mongodb/accountRepository/account';
import { SignUpController } from '../../presentation/controllers/signUp/signUpController';
import { EmailValidatorAdapter } from '../../utils/emailValidatorAdapter';

export const makeSignUpController = (): SignUpController => {
    const salt = 12;
    const bcryptAdapter = new BcryptAdapter(salt);
    const accountMongoRepository = new AccountMongoRepository();
    const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository);
    const emailValidatorAdapter = new EmailValidatorAdapter();
    return new SignUpController(emailValidatorAdapter, dbAddAccount);
};
