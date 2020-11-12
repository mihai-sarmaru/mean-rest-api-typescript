import {Request, Response, NextFunction} from 'express';
import {ObjectSchema} from 'joi';
import {ServerResponse, ValidationMessage} from '../constants/constants';

export class JoiValidation {

    public static validateBody(schema: ObjectSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            const response = {...ServerResponse.defaultServerResponse};
            const error = this.validateObjectSchema(req.body, schema);
            if (error) {
                response.body = error;
                response.message = ValidationMessage.BAD_REQUEST;
                return res.status(response.statusCode).send(response);
            }
            return next();
        }
    }

    public static validateQueryParams(schema: ObjectSchema) {
        return (req: Request, res: Response, next: NextFunction) => {
            const response = {...ServerResponse.defaultServerResponse};
            const error = this.validateObjectSchema(req.query, schema);
            if (error) {
                response.body = error;
                response.message = ValidationMessage.BAD_REQUEST;
                return res.status(response.statusCode).send(response);
            }
            return next();
        }
    }

    private static validateObjectSchema(dataObject: any, schema: ObjectSchema) {
        const result = schema.validate(dataObject, {convert: false});

        if (result.error) {
            const errorDetails = result.error.details.map(value => {
                return {
                    error: value.message,
                    path: value.path
                }
            });
            console.log('Validation: ', errorDetails);
            return errorDetails;
        }
        return null;
    }

}