import {Product, ProductType} from '../models/product';

export class ProductService {

    public async createProduct(productData: ProductType) {
        try {
            let product = new Product({...productData});
            const result = await product.save();
            return result.toObject();
        } catch (error) {
            console.log('Something went wrong: Service: createProduct', error);
            throw new Error(error);
        }
    }

    public async getAllProducts() {
        try {
            let products = await Product.find({});
            return products;
        } catch (error) {
            console.log('Something went wrong: Service: getAllProducts', error);
            throw new Error(error);
        }
    }

}