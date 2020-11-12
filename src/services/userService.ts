import bcrypt from 'bcrypt';
import {User, IUser} from '../models/user';
import {BCrypt, UserMessage} from '../constants/constants';
import {DbHelper} from '../utils/dbHelper';

export class UserService {

    public async signup(userInfo: IUser) {
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
            console.log('Something went wrong: Service: signup', error);
            throw new Error(error);
        }
    }

    public async login(userInfo: IUser) {
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

        } catch (error) {
            console.log('Something went wrong: Service: login', error);
            throw new Error(error);
        }
    }

}