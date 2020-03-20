/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const { gql } = require('apollo-server');
const fs = require('fs');

const newSchema = () => {
  let mySchema = '';
  fs.readdirSync(__dirname).forEach((file) => {
    if (file.includes('Schema')) {
      mySchema += require(`./${file}`);
    }
  });
  return mySchema;
};

module.exports = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }

  ${newSchema()}
`;
