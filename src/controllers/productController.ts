import {Request, Response} from 'express';
import {ServerResponse} from '../constants/constants';

export class ProductController {

    public async createProduct(req: Request, res: Response) {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            throw new Error('Not implemented yet');
        } catch (error) {
            console.log('Something went wrong: Controller: createProduct', error);
            response.message = error.message;
        }
        return res.status(response.statusCode).send(response);
    }

}