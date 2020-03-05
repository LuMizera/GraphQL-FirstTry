module.exports = {
  userRegister: async (_, user, { dataSources: { userModel } }) => {
    const result = await userModel.createUser(user);
    return result;
  },
};
