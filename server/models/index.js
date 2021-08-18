// We are going to have 3 models 

// First one for the user, the typedefs are going to be based on that model so the user is going to be based on the signup form so its going to have an id, an username, and a password.
const User = require('./User');
// Second we have to write an orders model that will have the action that is going to be ordered, the amount of actions and the price, name, ticker, etc
const Stock = require('./Stock');
// Thir we have order that is going to have the orders that the user ordered
// const Order = require('./Order');

module.exports = { User, Stock };
