const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../../models/User');

module.exports = {
  Mutation: {
    async addUser(parent, args, context, info) {
      const {
        addUserInput: { email, username, password, confirmPassword },
      } = args;
      password = await bcrypt.hash(password, 12);
      const newUser = new User({
        email,
        username,
      });
    },
  },
};
