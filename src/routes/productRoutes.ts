import {Router} from 'express';

import {ProductController} from '../controllers/productController';
import {JoiValidation} from '../middleware/joiSchemaValidation';
import {productSchema, getAllProductsSchema} from '../schema/productSchema';

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

        this.router.get('/',
            JoiValidation.validateQueryParams(getAllProductsSchema),
            this.productController.getAllProducts);

        this.router.get('/:id',
            this.productController.getProductById);
    }
}

export default new ProductRoutes().router;