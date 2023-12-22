"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var UserSchema = new mongoose_1.Schema({
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
            validator: function (value) {
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
            validator: function (value) { return /^[0-9]{10}$/.test(value.toString()); },
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
var UserModel = mongoose_1.default.model('User', UserSchema);
exports.default = UserModel;
