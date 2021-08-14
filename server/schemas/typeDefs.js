const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String!
    email: String
    orders: [Orders]
  }

  type Orders {
    owner_id: String!
    _id: ID
    unit_price: Float
    total_price: Float
    quantity: Float
    stocks: [Stocks]
  }

  type Stocks {
    _id: ID
    ticker: String
    name: String
    price: Float
    date: String
    icon: String
  }

  type Query {
    user(id: ID!): User
    orders: [Orders]
    stocks: [Stocks]
  }
`;

module.exports = typeDefs;
