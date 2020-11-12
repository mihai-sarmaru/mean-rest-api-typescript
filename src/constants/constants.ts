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
    public static PRODUCT_NOT_FOUND: string = 'Product not found';
    public static PRODUCT_UPDATED: string = 'Product updated successfully';
    public static PRODUCT_DELETED: string = 'Product deleted successfully';
}

export class UserMessage {
    public static SIGNUP_SUCCESS: string = 'Signed up successfully';
}

export class ValidationMessage {
    public static BAD_REQUEST: string = 'Invalid Fields';
}

export class DatabaseMessage {
    public static INVALID_ID: string = 'Invalid ID';
}