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

  input StockInput{
    stockId: String!
    icon: String
    name: String
    ticker: String
    unit_price: Float
    quantity: Float
    total_price: Float
  }

  type Auth {
    token: ID!
    user: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveStock(stockData: StockInput!): User
    removeStock(stockId: ID!): User
  }
`;

module.exports = typeDefs;