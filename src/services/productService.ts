import {Product, ProductType} from '../models/product';
import {DbHelper} from '../utils/dbHelper';
import {ProductMessage} from '../constants/constants';

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

    public async getAllProducts({skip = '0', limit = '10'}) { // <-- destructured string params
        try {
            let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
            return DbHelper.formatMongoData(products);
        } catch (error) {
            console.log('Something went wrong: Service: getAllProducts', error);
            throw new Error(error);
        }
    }

    public async getProductById(id: string) {
        try {
            DbHelper.checkObjectId(id);

            let product = await Product.findById(id);
            if (!product) {
                throw new Error(ProductMessage.PRODUCT_NOT_FOUND);
            }
            return DbHelper.formatMongoData(product);
        } catch (error) {
            console.log('Something went wrong: Service: getProduct', error);
            throw new Error(error);
        }
    }

    public async updateProduct(id: string, updateInfo: any) {
        try {
            DbHelper.checkObjectId(id);

            let product = await Product.findOneAndUpdate({_id: id}, updateInfo, {new: true});
            if (!product) {
                throw new Error(ProductMessage.PRODUCT_NOT_FOUND);
            }
            return DbHelper.formatMongoData(product);
        } catch (error) {
            console.log('Something went wrong: Service: updateProduct', error);
            throw new Error(error);
        }
    }

    public async deleteProduct(id: string) {
        try {
            DbHelper.checkObjectId(id);

            let product = await Product.findByIdAndDelete(id);
            if (!product) {
                throw new Error(ProductMessage.PRODUCT_NOT_FOUND);
            }
            return DbHelper.formatMongoData(product);
        } catch (error) {
            console.log('Something went wrong: Service: deleteProduct', error);
            throw new Error(error);
        }
    }
}