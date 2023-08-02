import { InvalidParamError, MissingParamError } from '../../errors';
import { badRequest, serverError } from '../../helpers/httpHelper/http';
import { AddAccount, Controller, EmailValidator, HttpRequest, HttpResponse } from './signUpProtocols';

export class SignUpController implements Controller {
    private readonly emailValidator: EmailValidator;
    private readonly addAccount: AddAccount;

    constructor(emailValidator: EmailValidator, addAccount: AddAccount) {
        this.emailValidator = emailValidator;
        this.addAccount = addAccount;
    }

    handle(httpRequest: HttpRequest): HttpResponse {
        try {
            const requiredFields = ['name', 'email', 'password', 'passwordConfirmation'];
            for (const field of requiredFields) {
                if (!httpRequest.body[field]) {
                    return badRequest(new MissingParamError(field));
                }
            }
            const { name, email, password, passwordConfirmation } = httpRequest.body;
            const emailIsValid = this.emailValidator.isValid(email);
            if (!emailIsValid) {
                return badRequest(new InvalidParamError('email'));
            }
            if (password !== passwordConfirmation) {
                return badRequest(new InvalidParamError('passwordConfirmation'));
            }
            const account = this.addAccount.add({ name, email, password });
            return {
                statusCode: 200,
                body: account
            };
        } catch (error) {
            return serverError();
        }
    }
}
