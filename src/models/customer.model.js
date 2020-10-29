const { Schema, model } = require('mongoose');

const customerSchema = new Schema({
    names: {
        type: String,
        required: true,
    },
    lastNames: {
        type: String,
        required: true,
    },
    idType: {
        type: String,
        required: true,
    },
    idNumber: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    phone: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    birthDate: {
        type: String,
        required: true,
    },
    adress: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        default: 'customer'
    },
    orders: [{
        type: Schema.Types.ObjectId,
        ref: 'Order',
    }],
    isVerified: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true,
});

const Customer = model('Customer', customerSchema);

module.exports = Customer;