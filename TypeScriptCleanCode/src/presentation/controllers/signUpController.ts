import { MissingParamError } from '../errors/missingParamError';
import { badRequest } from '../helpers/httpHelper/http';
import { HttpRequest, HttpResponse } from '../protocols/http';

export class SignUpController {
    handle(httpRequest: HttpRequest): HttpResponse {
        const requiredFields = ['name', 'email'];
        for (const field of requiredFields) {
            if (!httpRequest.body[field]) {
                return badRequest(new MissingParamError(field));
            }
        }
    }
}
