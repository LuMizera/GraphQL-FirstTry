module.exports = {
    userList: async (_, __, { dataSources: { userModel } }) => {
        const result = await userModel.listUsers();
        return result;
    },
    user: async (_, query, { dataSources: { userModel } }) => {
        const result = await userModel.userByQuery(query);
        return result;
    },
}