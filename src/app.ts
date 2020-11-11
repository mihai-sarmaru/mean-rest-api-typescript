import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import {DbConnection} from './database/dbConnection';
import ProductRouter from './routes/productRoutes';

class App {
    public readonly APP: Application;

    constructor() {
        this.APP = express();
        this.config();
        // connect to db
        DbConnection.connect();
        // error handling middleware
        this.configErrorHandling();

        this.configRouters();
    }

    private config(): void {
        // request payload middleware
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded({extended: true}));
        // cors - access api from different domains
        this.APP.use(cors());
    }

    private configRouters() {
        this.APP.use('/api/v1/product', ProductRouter);
    }

    private configErrorHandling() {
        this.APP.use((err: Error, req: Request, res: Response, next: NextFunction) => {
            res.status(500).send({
                status: 500,
                message: err.message,
                body: {}
            });
        });
    }
}

export default new App().APP;