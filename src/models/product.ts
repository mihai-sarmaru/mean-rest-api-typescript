import mongoose, {Schema} from 'mongoose';

export interface IProduct extends mongoose.Document {
    name: string,
    price: number,
    brand: string
}

const productSchema = new Schema({
    name: String,
    price: Number,
    brand: String
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

export const Product = mongoose.model<IProduct>('Product', productSchema);