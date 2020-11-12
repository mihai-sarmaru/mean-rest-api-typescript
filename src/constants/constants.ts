type defaultServerResponseType = {
    statusCode: number,
    message: string,
    body: object
}

export class ServerResponse {
    public static defaultServerResponse: defaultServerResponseType = {
        statusCode: 400,
        message: '',
        body: {}
    };
}

export class ProductMessage {
    public static PRODUCT_CREATED: string = 'Product created successfully';
    public static PRODUCT_FETCHED: string = 'Product fetched successfully';
}

export class ValidationMessage {
    public static BAD_REQUEST: string = 'Invalid Fields';
}