import { Controller } from '../../presentation/protocols';
import { LogControllerDecorator } from '../../decorators/log';
import { DbAddAccount } from '../../data/useCases/dbAddAccount';
import { BcryptAdapter } from '../../infra/cryptography/bcryptEncrypter';
import { EmailValidatorAdapter } from '../../utils/emailValidatorAdapter';
import { AccountMongoRepository } from '../../infra/db/mongodb/accountRepository/account';
import { SignUpController } from '../../presentation/controllers/signUp/signUpController';

export const makeSignUpController = (): Controller => {
    const salt = 12;
    const bcryptAdapter = new BcryptAdapter(salt);
    const accountMongoRepository = new AccountMongoRepository();
    const dbAddAccount = new DbAddAccount(bcryptAdapter, accountMongoRepository);
    const emailValidatorAdapter = new EmailValidatorAdapter();
    const signUpController = new SignUpController(emailValidatorAdapter, dbAddAccount);
    return new LogControllerDecorator(signUpController);
};
