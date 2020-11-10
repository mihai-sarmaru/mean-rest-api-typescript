import mongoose, {Schema} from 'mongoose';

const productSchema = new Schema({
    name: String,
    price: Number,
    brand: String
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

export default Product;