const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const { User } = require('./schemas/graphQL/user');
const resolvers = require('./resolvers');
const UserService = require('./services/user');
const { UserModel } = require('./schemas/mongoose/user');

const server = new ApolloServer({
  typeDefs: User,
  dataSources: () => ({
    userModel: new UserService({ UserModel }),
  }),
  resolvers,
});

mongoose
  .connect('mongodb://localhost:27017/graphQL', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    server.listen().then(({ url }) => {
      console.log(`🚀 Server ready at ${url}`);
    });
  })
  .catch((err) => {
    console.log('err :', err);
  });
