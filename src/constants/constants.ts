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
}