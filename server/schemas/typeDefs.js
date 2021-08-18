const { gql } = require("apollo-server-express");

// Now this is how our model are going to look like on graphql, lets start from the user
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    email: String
    password: String
    orders: [Stock]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Stock {
    stockId: ID!
    icon: String
    name: String
    ticker: String
    unit_price: Float
    quantity: Float
    total_price: Float
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

  type Query {
    user(username: String!): User
    stocks: [Stock]
    users: [User]
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveStock(stockData: StockInput!): User
    removeStock(stockId: ID!): User
  }
`;

module.exports = typeDefs;
