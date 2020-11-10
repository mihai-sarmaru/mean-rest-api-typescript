import mongoose from 'mongoose';
import {dotEnv} from '../utils/env';

export class DbConnection {
    public static mongoURL: string = dotEnv.MONGO_URL;

    static async connect() {
        try {
            mongoose.Promise = global.Promise;
            await mongoose.connect(this.mongoURL, {useNewUrlParser: true, useUnifiedTopology: true});
            console.log('Connected to MongoDB');
        } catch (error) {
            console.log('Database connectivity error: ', error);
            throw new Error(error);
        }
    }
}