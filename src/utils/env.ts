import { load } from 'ts-dotenv';

export const dotEnv = load({
    PORT: Number,
    MONGO_URL: String,
    JWT_PRIVATE_KEY: String
});