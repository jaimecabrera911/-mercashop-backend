const { Schema, model } = require('mongoose');

const providerSchema = new Schema({
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
        type: String,
        required: true,
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
        type: Date,
        required: true,
        trim: true
    },
    adress: {
        type: String,
        required: true
    },
    businessName: {
        type: String,
        required: true,
        unique: true
    },
    nit: {
        type: Number,
        required: true,
        unique: true,
        trim: true
    },
    commerceType: {
        type: String,
        required: true,
    },
    webPage: {
        type: String,
        trim: true,
        default: "...",
    },
    password: {
        type: String,
        trim: true
    },
    role : {
        type: String,
        default: 'provider'
    }
}, {
    timestamps: true,
});

const Provider = model('Provider', providerSchema);

module.exports = Provider;