import express, {Router, Request, Response} from 'express';

class ProductRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.getProductRoutes();
    }

    private getProductRoutes() {
        this.router.post('/', (req: Request, res: Response) => {
            res.send({message: "POST PRODUCT"});
        });
    }
}

export default new ProductRoutes().router;