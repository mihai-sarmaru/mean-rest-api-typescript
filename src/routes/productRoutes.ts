import {Router} from 'express';

import {ProductController} from '../controllers/productController';
import {JoiValidation} from '../middleware/joiSchemaValidation';
import {productSchema, getAllProductsSchema, updateProductSchema} from '../schema/productSchema';
import {TokenValidation} from '../middleware/tokenValidation';

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
            TokenValidation.validateToken,
            JoiValidation.validateBody(productSchema),
            this.productController.createProduct);

        this.router.get('/',
            TokenValidation.validateToken,
            JoiValidation.validateQueryParams(getAllProductsSchema),
            this.productController.getAllProducts);

        this.router.get('/:id',
            TokenValidation.validateToken,
            this.productController.getProductById);

        this.router.put('/:id',
            TokenValidation.validateToken,
            JoiValidation.validateBody(updateProductSchema),
            this.productController.updateProduct);

        this.router.delete('/:id',
            TokenValidation.validateToken,
            this.productController.deleteProduct);
    }
}

export default new ProductRoutes().router;