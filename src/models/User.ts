import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
    Name: string;
    Email: string;
    Password: string,
    mobileNumber: number,
    Age: number,
    City: string,
    Contry: string
};

const UserSchema: Schema = new Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
    },
    Password: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (value: string): boolean | string {
                return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(value);
            },
            message: 'Password must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long',
        },
    },
    mobileNumber: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: (value: number): boolean | string => /^[0-9]{10}$/.test(value.toString()),
            message: 'Please enter a valid 10-digit mobile number',
        },
    },
    Age: {
        type: Number,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Contry: {
        type: String,
        required: true,
    }
}, { strict: "throw" });

const UserModel = mongoose.model<IUser>('User', UserSchema);

export default UserModel;