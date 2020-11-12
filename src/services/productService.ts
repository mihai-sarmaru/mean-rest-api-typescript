import {Product, ProductType} from '../models/product';
import {DbHelper} from '../utils/dbHelper';

export class ProductService {

    public async createProduct(productData: ProductType) {
        try {
            let product = new Product({...productData});
            const result = await product.save();
            return DbHelper.formatMongoData(result);
        } catch (error) {
            console.log('Something went wrong: Service: createProduct', error);
            throw new Error(error);
        }
    }

    public async getAllProducts() {
        try {
            let products = await Product.find({});
            return DbHelper.formatMongoData(products);
        } catch (error) {
            console.log('Something went wrong: Service: getAllProducts', error);
            throw new Error(error);
        }
    }

}