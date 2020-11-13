import {Request, Response} from 'express';
import { UserMessage } from "../constants/constants";
import {UserService} from '../services/userService';
import {SendResponseHelper} from './helpers/sendResponseHelper';

export class UserController {

    private userService: UserService;
    private responseHelper: SendResponseHelper;

    constructor() {
        this.userService = new UserService();
        this.responseHelper = new SendResponseHelper();
    }

    public signup = async (req: Request, res: Response) => {
        try {
            const serviceResponse = await this.userService.signup(req.body);
            this.responseHelper.sendServiceResponse(serviceResponse, UserMessage.SIGNUP_SUCCESS, res);
        } catch (error) {
            this.responseHelper.sendServiceError(error, 'signup', res);
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const serviceResponse = await this.userService.login(req.body);
            this.responseHelper.sendServiceResponse(serviceResponse, UserMessage.LOGIN_SUCCESS, res);
        } catch (error) {
            this.responseHelper.sendServiceError(error, 'login', res);
        }
    }

}