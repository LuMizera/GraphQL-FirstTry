const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const schema = require('./schemas/graphQL');
const resolvers = require('./resolvers');
const UserService = require('./services/user');
const { UserModel } = require('./schemas/mongoose/user');

const server = new ApolloServer({
  typeDefs: schema,
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
