import {Request, Response} from 'express';
import {ServerResponse, ProductMessage} from '../constants/constants';
import {ProductService} from '../services/productService';

export class ProductController {

    private productService: ProductService;

    constructor() {
        this.productService = new ProductService();
    }

    public createProduct = async (req: Request, res: Response) => {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            const serviceResponse = await this.productService.createProduct(req.body);
            
            response.statusCode = 200;
            response.message = ProductMessage.PRODUCT_CREATED;
            response.body = serviceResponse;
        } catch (error) {
            console.log('Something went wrong: Controller: createProduct', error);
            response.message = error.message;
        }
        return res.status(response.statusCode).send(response);
    }

    public getAllProducts = async (req: Request, res: Response) => {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            const serviceResponse = await this.productService.getAllProducts(req.query);
            
            response.statusCode = 200;
            response.message = ProductMessage.PRODUCT_FETCHED;
            response.body = serviceResponse;
        } catch (error) {
            console.log('Something went wrong: Controller: getAllProducts', error);
            response.message = error.message;
        }
        return res.status(response.statusCode).send(response);
    }

    public getProductById = async (req: Request, res: Response) => {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            const serviceResponse = await this.productService.getProductById(req.params.id);
            
            response.statusCode = 200;
            response.message = ProductMessage.PRODUCT_FETCHED;
            response.body = serviceResponse;
        } catch (error) {
            console.log('Something went wrong: Controller: getProductById', error);
            response.message = error.message;
        }
        return res.status(response.statusCode).send(response);
    }

    public updateProduct = async (req: Request, res: Response) => {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            const serviceResponse = await this.productService.updateProduct(req.params.id, req.body);
            
            response.statusCode = 200;
            response.message = ProductMessage.PRODUCT_FETCHED;
            response.body = serviceResponse;
        } catch (error) {
            console.log('Something went wrong: Controller: updateProduct', error);
            response.message = error.message;
        }
        return res.status(response.statusCode).send(response);
    }

    public deleteProduct = async (req: Request, res: Response) => {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            const serviceResponse = await this.productService.deleteProduct(req.params.id);
            
            response.statusCode = 200;
            response.message = ProductMessage.PRODUCT_DELETED;
            response.body = serviceResponse;
        } catch (error) {
            console.log('Something went wrong: Controller: deleteProduct', error);
            response.message = error.message;
        }
        return res.status(response.statusCode).send(response);
    }

}