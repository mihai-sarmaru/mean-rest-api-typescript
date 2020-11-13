import {Request, Response} from 'express';
import {ServerResponse, ProductMessage} from '../constants/constants';
import {ProductService} from '../services/productService';
import {SendResponseHelper} from './helpers/sendResponseHelper';

export class ProductController {

    private productService: ProductService;
    private responseHelper: SendResponseHelper;

    constructor() {
        this.productService = new ProductService();
        this.responseHelper = new SendResponseHelper();
    }

    public createProduct = async (req: Request, res: Response) => {
        try {
            const serviceResponse = await this.productService.createProduct(req.body);
            this.responseHelper.sendServiceResponse(serviceResponse, ProductMessage.PRODUCT_CREATED, res);
        } catch (error) {
            this.responseHelper.sendServiceError(error, 'createProduct', res);
        }
    }

    public getAllProducts = async (req: Request, res: Response) => {
        try {
            const serviceResponse = await this.productService.getAllProducts(req.query);
            this.responseHelper.sendServiceResponse(serviceResponse, ProductMessage.PRODUCT_FETCHED, res);
        } catch (error) {
            this.responseHelper.sendServiceError(error, 'getAllProducts', res);
        }
    }

    public getProductById = async (req: Request, res: Response) => {
        try {
            const serviceResponse = await this.productService.getProductById(req.params.id);
            this.responseHelper.sendServiceResponse(serviceResponse, ProductMessage.PRODUCT_FETCHED, res);
        } catch (error) {
            this.responseHelper.sendServiceError(error, 'getProductById', res);
        }
    }

    public updateProduct = async (req: Request, res: Response) => {
        try {
            const serviceResponse = await this.productService.updateProduct(req.params.id, req.body);
            this.responseHelper.sendServiceResponse(serviceResponse, ProductMessage.PRODUCT_UPDATED, res);
        } catch (error) {
            this.responseHelper.sendServiceError(error, 'updateProduct', res);
        }
    }

    public deleteProduct = async (req: Request, res: Response) => {
        try {
            const serviceResponse = await this.productService.deleteProduct(req.params.id);
            this.responseHelper.sendServiceResponse(serviceResponse, ProductMessage.PRODUCT_DELETED, res);
        } catch (error) {
            this.responseHelper.sendServiceError(error, 'deleteProduct', res);
        }
    }

}