import {Router} from 'express';

import {ProductController} from '../controllers/productController';
import {JoiValidation} from '../middleware/joiSchemaValidation';
import {productSchema} from '../schema/productSchema';

class ProductRoutes {
    public router: Router;
    private productController: ProductController;

    constructor() {
        this.router = Router();
        this.productController = new ProductController();

        this.getProductRoutes();
    }

    private getProductRoutes() {
        this.router.post('/',
            JoiValidation.validateBody(productSchema),
            this.productController.createProduct);
    }
}

export default new ProductRoutes().router;