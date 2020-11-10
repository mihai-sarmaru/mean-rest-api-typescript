import express, {Application, Request, Response, NextFunction} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

class App {
    public readonly APP: Application;

    constructor() {
        this.APP = express();
        this.config();
        // error handling middleware
        this.configErrorHandling();
    }

    private config(): void {
        // request payload middleware
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded({extended: true}));
        // cors - access api from different domains
        this.APP.use(cors());
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