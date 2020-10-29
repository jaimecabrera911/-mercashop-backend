const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const invoiceSchema = new Schema(
  {
    customer: {
      type: Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    products: [
      {
        type: String,
        required: true,
      },
    ],
    transactionNumber: {
      type: Number,
    },
    names: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
    },
    city: {
      type: String,
    },
    payment: {
      type: String,
    },
    itemsPrice: {
      type: Number,
    },
    taxPrice: {
      type: Number,
    },
    shippingPrice: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    numberInvoice: {
      type: Number,
    },
    paidAt: {
      type: Date,
    },
    status: {
      type: String,
      required: true,
    },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    date: {
      type: Date,
    },
  },
  { timestamps: true }
);

const Invoice = model("Invoice", invoiceSchema);
module.exports = Invoice;
