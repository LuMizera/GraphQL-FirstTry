module.exports = `
  extend type Query {
    userList: [User]
    userById(_id: ID!): User
  }

  type User {
    _id: ID!
    name: String!
  }

  extend type Mutation {
    userRegister(name: String!): User
  }
`;
