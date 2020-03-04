module.exports = {
  Query: {
    userList: async (_, __, { dataSources: { userModel } }) => {
      const result = await userModel.listUsers();
      return result;
    },
    user: async (_, query, { dataSources: { userModel } }) => {
      const result = await userModel.userByQuery(query);
      return result;
    },
  },
  Mutation: {
    register: async (_, user, { dataSources: { userModel } }) => {
      const result = await userModel.createUser(user);
      return result;
    },
  },
};
