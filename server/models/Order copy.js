const { Schema, model } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
const orderSchema= new Schema({

  owner_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  stock_id: {
    type: Schema.Types.ObjectId,
    ref: 'Stock',
    required: true,
  },
  unit_price: {
    type: Number,
    required: true,
  },
  total_price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  stocks: [
    { id
    }
  ]
});

const Order = model('Order', orderSchema);

module.exports = Order;