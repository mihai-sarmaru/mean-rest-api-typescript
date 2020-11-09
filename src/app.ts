import express, {Application} from 'express';
import bodyParser from 'body-parser';

class App {
    public readonly APP: Application;

    constructor() {
        this.APP = express();
        this.config();
    }

    private config(): void {
        this.APP.use(bodyParser.json());
        this.APP.use(bodyParser.urlencoded({extended: true}));
    }
}

export default new App().APP;