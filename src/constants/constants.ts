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

export class BCrypt {
    public static DEFAULT_RECOMMENDED_SALT_ROUND: number = 12;
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
    public static LOGIN_SUCCESS: string = 'Logged in successfully';
    public static USER_EXISTS: string = 'Signup email already exists';
    public static USER_NOT_FOUND: string = 'User not found';
    public static INVALID_PASSWORD: string = 'Incorrect password';
}

export class ValidationMessage {
    public static BAD_REQUEST: string = 'Invalid fields';
    public static NO_TOKEN: string = 'Token is missing from header';
    public static INVALID_TOKEN: string = 'Token is invalid';
}

export class DatabaseMessage {
    public static INVALID_ID: string = 'Invalid ID';
}