import express, {Application} from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

class App {
    public readonly APP: Application;

    constructor() {
        this.APP = express();
        this.config();
    }

    private config(): void {
        // request payload middleware
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded({extended: true}));
        // cors - access api from different domains
        this.APP.use(cors());
    }
}

export default new App().APP;