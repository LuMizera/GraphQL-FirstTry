const UserQueries = require('./users');

module.exports = {
  Query: {
    ...UserQueries.queries,
  },
  Mutation: {
    ...UserQueries.mutators,
  },
};
