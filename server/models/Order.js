// const { Schema, model } = require('mongoose');

// // This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
// const orderSchema= new Schema({
//   // Price for each stock like 1 action of apple is equal to 10 usd
//   unit_price: {
//     type: Number,
//     required: true,
//   },

//   // Amount of stoks example 10 stocks of apple
//   quantity: {
//     type: Number,
//     required: true,
//   },

//   // Total price of the stocks that the user owned for example 10 actions of apple is equal to 100 usd
//   total_price: {
//     type: Number,
//     required: true,
//   },


//   // Here we are reffering to the stocks model because an order has stocks
//   stocks: [
//     {
//       type: Schema.Types.ObjectId,
//       ref: 'Stock'
//     }
//   ]
// });

// const Order = model('Order', orderSchema);

// module.exports = Order;