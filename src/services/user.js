class User {
  constructor({ UserModel }) {
    this.UserModel = UserModel;
  }

  async listUsers() {
    const result = await this.UserModel.find();
    return result;
  }

  async createUser(user) {
    const newUser = new this.UserModel(user);

    await newUser.save();

    return newUser;
  }

  async userByQuery(query) {
    const result = await this.UserModel.findOne(query);
    return result;
  }
}

module.exports = User;
