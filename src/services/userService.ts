import {User, UserType} from '../models/user';
import {UserMessage} from '../constants/constants';

export class UserService {

    public async signup(userInfo: UserType) {
        try {
            // check if user exists
            const user = await User.findOne({email: userInfo.email});
            if (user) {
                throw new Error(UserMessage.USER_EXISTS);
            }
        } catch (error) {
            console.log('Something went wrong: Service: updateProduct', error);
            throw new Error(error);
        }
    }

}