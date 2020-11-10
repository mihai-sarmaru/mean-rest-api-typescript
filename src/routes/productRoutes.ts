import {Router} from 'express';

import {ProductController} from '../controllers/productController';

class ProductRoutes {
    public router: Router;
    private productController: ProductController;

    constructor() {
        this.router = Router();
        this.productController = new ProductController();

        this.getProductRoutes();
    }

    private getProductRoutes() {
        this.router.post('/', this.productController.createProduct);
    }
}

export default new ProductRoutes().router;