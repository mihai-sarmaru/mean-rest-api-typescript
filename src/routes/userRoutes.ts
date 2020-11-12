import {Router} from 'express';

import {JoiValidation} from '../middleware/joiSchemaValidation';
import {userSchema} from '../schema/userSchema';
import {UserController} from '../controllers/userController';

class UserRoutes {
    public router: Router;
    private userController: UserController;

    constructor() {
        this.router = Router();
        this.userController = new UserController();

        this.getUserRoutes();
    }

    private getUserRoutes() {
        this.router.post('/signup',
            JoiValidation.validateBody(userSchema),
            this.userController.signup);
    }
}

export default new UserRoutes().router;