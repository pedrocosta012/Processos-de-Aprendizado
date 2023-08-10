import { Router } from 'express';
import { adaptRoute } from '../adapters/expressAdapter';
import { makeSignUpController } from '../factories/signUp';

export default (router: Router): void => {
    router.post('/signup', adaptRoute(makeSignUpController()));
};
