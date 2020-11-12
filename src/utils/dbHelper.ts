import {Document} from 'mongoose';

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

}