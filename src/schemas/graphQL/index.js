const { gql } = require('apollo-server');
const UserSchema = require('./users');

const schema = gql`
  ${UserSchema.types}

  type Query {
    ${UserSchema.queries}
  }

  type Mutation {
    ${UserSchema.mutators}
  }
`;

module.exports = schema;
