import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import {dotEnv} from '../utils/env';
import {User, IUser} from '../models/user';
import {BCrypt, UserMessage} from '../constants/constants';
import {DbHelper} from '../utils/dbHelper';

export class UserService {

    public signup = async (userInfo: IUser) => {
        try {
            // check if user exists
            const user = await User.findOne({email: userInfo.email});
            if (user) {
                throw new Error(UserMessage.USER_EXISTS);
            }

            // hash password
            const hashedPassword = await bcrypt.hash(userInfo.password, BCrypt.DEFAULT_RECOMMENDED_SALT_ROUND);

            // add new user
            const newUser = new User({email: userInfo.email, password: hashedPassword});
            const result = await newUser.save();
            return DbHelper.formatMongoData(result);

        } catch (error) {
            this.throwServiceError(error, 'signup');
        }
    }

    public login = async (userInfo: IUser) => {
        try {
            // check if user exists
            const user = await User.findOne({email: userInfo.email});
            if (!user) {
                throw new Error(UserMessage.USER_NOT_FOUND);
            }

            // check if password is valid
            const isPasswordValid = bcrypt.compare(userInfo.password, user.password);
            if (!isPasswordValid) {
                throw new Error(UserMessage.INVALID_PASSWORD);
            }

            // create and return json-web-token
            const token = jwt.sign({id: user._id}, dotEnv.JWT_PRIVATE_KEY, {expiresIn: '1d'});
            return {token: token};

        } catch (error) {
            this.throwServiceError(error, 'login');
        }
    }

    private throwServiceError = (error: any, methodName: string) => {
        console.log('Something went wrong: Service: ' + methodName, error);
        throw new Error(error);
    }

}