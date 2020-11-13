import {Response} from 'express';
import { ServerResponse } from "../../constants/constants";

export class SendResponseHelper {

    public sendServiceResponse = (serviceResponse: any, responseMessage: string, res: Response) => {
        let response = {...ServerResponse.defaultServerResponse};
        response.statusCode = 200;
        response.message = responseMessage;
        response.body = serviceResponse;
        return res.status(response.statusCode).send(response);
    }

    public sendServiceError = (error: any, methodName: string, res: Response) => {
        console.log('Something went wrong: Controller: ' + methodName, error);
        let response = {...ServerResponse.defaultServerResponse};
        response.message = error.message;
        return res.status(response.statusCode).send(response);
    }

}