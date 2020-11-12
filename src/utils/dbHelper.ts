import mongoose, {Document} from 'mongoose';
import {DatabaseMessage} from '../constants/constants';

export class DbHelper {

    public static formatMongoData(mongoData: Document | Document[]) {
        if (Array.isArray(mongoData)) {
            let newDataArray: Document[] = [];
            for (const value of mongoData) {
                newDataArray.push(value.toObject());
            }
            return newDataArray;
        }
        return mongoData.toObject();
    }

    public static checkObjectId(id: string) {
        if (!mongoose.Types.ObjectId.isValid(id)) {
            throw new Error(DatabaseMessage.INVALID_ID);
        }
    }

}