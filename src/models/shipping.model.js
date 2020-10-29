const { Schema, model } = require('mongoose');

const shippingSchema = new Schema({
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
});

const Shipping = model('Shipping', shippingSchema);
module.exports = Shipping;