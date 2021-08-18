const { Schema, model } = require("mongoose");

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedBooks` array in User.js
// We need to define our stock model
const stockSchema = new Schema({
  // Define an id to the stock
  stockId: {
    type: String,
    required: true,
  },

  // First the stock icon like apple has an apple
  icon: {
    type: String,
  },

  // First the name example apple
  name: {
    type: String,
    required: true,
  },

  // Second the stock ticker, example APPL
  ticker: {
    type: String,
    required: true,
  },

  // Then the stock price example 10 usd
  // price: {
  //   type: Number,
  //   required: true,
  // },

  // Price for each stock like 1 action of apple is equal to 10 usd
  unit_price: {
    type: Number,
    required: true,
  },

  // Amount of stoks example 10 stocks of apple
  quantity: {
    type: Number,
    required: true,
  },

  // Total price of the stocks that the user owned for example 10 actions of apple is equal to 100 usd
  total_price: {
    type: Number,
    required: true,
  },

  // Lets leave date off for a moment
  // date: {
  //   type: Date,
  //   required: true,
  // },

  // Orders has stocks but stocks does not have orders
  // orders: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Order'
  //   }
  // ]
});

const Stock = model("Stock", stockSchema);

module.exports = Stock;
