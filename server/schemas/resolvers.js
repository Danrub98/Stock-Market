const { AuthenticationError } = require("apollo-server-express");
const { User, Order, Stock } = require("../models");

const resolvers = {
  Query: {
    stocks: async (parent, args) => {
        return await Stock.find({});
      },  
    orders: async (parent, args) => {
      return await Order.find({}).populate("users");
    },
    user: async (parent, args) => {
        return await User.findById(args.id);
      },
  },
};

module.exports = resolvers;
