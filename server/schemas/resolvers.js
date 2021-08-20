const { AuthenticationError } = require("apollo-server-express");
const { User, Order, Stock } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    stocks: async (parent, args) => {
      return await Stock.find({});
    },
    users: async (parent, args) => {
      return await User.find({});
    },
    orders: async (parent, args) => {
      return await Order.find({}).populate("users");
    },
    user: async (parent, args) => {
      return await User.findById(args.id).populate("orders").populate("stocks");
    },
  },

  Mutation: {
    login: async (parent, { email, password }) => {
      // Look up the user by the provided email address. Since the `email` field is unique, we know that only one person will exist with that email
      const user = await User.findOne({ email });

      // If there is no user with that email address, return an Authentication error stating so
      if (!user) {
        throw new AuthenticationError("No user found with this email address");
      }

      // If there is a user found, execute the `isCorrectPassword` instance method and check if the correct password was provided
      const correctPw = await user.isCorrectPassword(password);

      // If the password is incorrect, return an Authentication error stating so
      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      // If email and password are correct, sign user into the application with a JWT
      const token = signToken(user);

      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    addUser: async (parent, { username, email, password }) => {
      // First we create the user
      const user = await User.create({ username, email, password });
      // To reduce friction for the user, we immediately sign a JSON Web Token and log the user in after they are created
      const token = signToken(user);
      // Return an `Auth` object that consists of the signed token and user's information
      return { token, user };
    },

    // Save stocks on the user profile
    saveStock: async (parent, { stocks }, context) => {
      console.log("contex", context.user);

      if (context.user) {
        console.log("stocks", stocks.unit_price);
        // Update the user with the saved stocks
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          {
            $push: {
              orders: {
                owner_id: context.user._id,
                unit_price: stocks.unit_price,
                total_price: stocks.total_price,
                quantity: stocks.quantity,
                stocks: [ {
                  name: stocks.name,
                  ticker: stocks.ticker
              }]
              },
            },
          },
          { new: true }
        );
        
        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // Remove the saved stocks from the user profile
    removeStock: async (parent, { stockId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedBooks: { stockId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;
