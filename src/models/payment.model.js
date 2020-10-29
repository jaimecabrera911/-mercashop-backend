const { Schema, model } = require('mongoose');

const paymentSchema = new Schema({
  paymentMethod: {
    type: String,
    required: true,
  },
});

const Payment = models('Payment', paymentSchema);
module.exports = Payment;