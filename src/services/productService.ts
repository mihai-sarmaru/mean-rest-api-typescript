import {Product, IProduct} from '../models/product';
import {DbHelper} from '../utils/dbHelper';
import {ProductMessage} from '../constants/constants';

export class ProductService {

    public createProduct = async (productData: IProduct) => {
        try {
            let product = new Product({...productData});
            const result = await product.save();
            return DbHelper.formatMongoData(result);
        } catch (error) {
            this.throwServiceError(error, 'createProduct');
        }
    }

    public getAllProducts = async ({skip = '0', limit = '10'}) => { // <-- destructured string params
        try {
            let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
            return DbHelper.formatMongoData(products);
        } catch (error) {
            this.throwServiceError(error, 'getAllProducts');
        }
    }

    public getProductById = async (id: string) => {
        try {
            DbHelper.checkObjectId(id);

            let product = await Product.findById(id);
            if (!product) {
                throw new Error(ProductMessage.PRODUCT_NOT_FOUND);
            }
            return DbHelper.formatMongoData(product);
        } catch (error) {
            this.throwServiceError(error, 'getProductById');
        }
    }

    public updateProduct = async (id: string, updateInfo: any) => {
        try {
            DbHelper.checkObjectId(id);

            let product = await Product.findOneAndUpdate({_id: id}, updateInfo, {new: true});
            if (!product) {
                throw new Error(ProductMessage.PRODUCT_NOT_FOUND);
            }
            return DbHelper.formatMongoData(product);
        } catch (error) {
            this.throwServiceError(error, 'updateProduct');
        }
    }

    public deleteProduct = async (id: string) => {
        try {
            DbHelper.checkObjectId(id);

            let product = await Product.findByIdAndDelete(id);
            if (!product) {
                throw new Error(ProductMessage.PRODUCT_NOT_FOUND);
            }
            return DbHelper.formatMongoData(product);
        } catch (error) {
            this.throwServiceError(error, 'deleteProduct');
        }
    }

    private throwServiceError = (error: any, methodName: string) => {
        console.log('Something went wrong: Service: ' + methodName, error);
        throw new Error(error);
    }
}