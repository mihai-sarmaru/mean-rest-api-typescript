import mongoose, {Schema} from 'mongoose';

export type ProductType = {
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
});

export const Product = mongoose.model('Product', productSchema);