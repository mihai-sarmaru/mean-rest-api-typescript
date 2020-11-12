import mongoose, {Schema} from 'mongoose';

export type UserType = {
    email: string,
    password: string
}

const userSchema = new Schema({
    email: String,
    password: String
}, {
    timestamps: true,
    toObject: {
        transform: function(doc, ret, options) {
            ret.id = ret._id;
            delete ret.password;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
});

export const User = mongoose.model('User', userSchema);