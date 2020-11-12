import {ValidationMessage, ServerResponse} from '../constants/constants'
import {dotEnv} from '../utils/env';
import {Request, Response, NextFunction} from 'express';
import jwt from 'jsonwebtoken';

export class TokenValidation {
    
    public static validateToken(req: Request, res: Response, next: NextFunction) {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            if (!req.headers.authorization) {
                throw new Error(ValidationMessage.NO_TOKEN);
            }

            // get token from header and verify
            const token = req.headers.authorization.replace('Bearer ', '');
            jwt.verify(token, dotEnv.JWT_PRIVATE_KEY);

            return next();

        } catch (error) {
            response.statusCode = 401;
            response.message = ValidationMessage.INVALID_TOKEN;
        }
        return res.status(response.statusCode).send(response);
    }

}