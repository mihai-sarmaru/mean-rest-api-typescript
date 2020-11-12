import {Request, Response} from 'express';
import { ServerResponse, UserMessage } from "../constants/constants";
import {UserService} from '../services/userService';

export class UserController {

    public async signup(req: Request, res: Response) {
        let response = {...ServerResponse.defaultServerResponse};
        try {
            const serviceResponse = await new UserService().signup(req.body);
            
            response.statusCode = 200;
            response.message = UserMessage.SIGNUP_SUCCESS;
            response.body = serviceResponse;
        } catch (error) {
            console.log('Something went wrong: Controller: signup', error);
            response.message = error.message;
        }
        return res.status(response.statusCode).send(response);
    }

}