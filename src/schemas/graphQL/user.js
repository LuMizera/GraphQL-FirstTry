const { gql } = require('apollo-server');

const User = gql`
  type User {
    _id: ID!
    name: String!
  }

  type Query {
    userList: [User]
    user(_id: ID!): User
  }

  type Mutation {
    register(name: String!): User
  }
`;

module.exports = { User };
