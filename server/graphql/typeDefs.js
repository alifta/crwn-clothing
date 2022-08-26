const { gql } = require('apollo-server');

module.exports = gql`
  type Post {
    id: ID!
    body: String!
    username: String!
    createdAt: String!
  }
  type User {
    id: ID!
    token: String!
    email: String!
    username: String!
    createdAt: String!
  }
  input AddUserInput {
    email: String!
    username: String!
    password: String!
    confirmPassword: String!
  }
  type Query {
    getPosts: [Post]
  }
  type Mutation {
    addUser(addUserInput: AddUserInput): User
  }
`;
