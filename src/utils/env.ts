import { load } from 'ts-dotenv';

export const dotEnv = load({
    PORT: Number,
    MONGO_URL: String
});