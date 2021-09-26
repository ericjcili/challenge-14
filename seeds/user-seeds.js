const { User } = require('../models');

const userData = [
  {
    username: "markrocks2000",
    email: "markrocks2000@gmail.com",
    password: "password123"
  },
  {
    username: "benisawesome",
    email: "benisawesome@gmail.com",
    password: "password123"
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;