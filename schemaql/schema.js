import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    checkApiStatus: ApiStatus
    users: Tuser
  }
  type ApiStatus {
    data: [objects]
  }
  type objects {
    id: Int
    name: String
    price: Int
    discount: Int
    introduction: String
    ingredients: [String]
    recipe: [String]
  }

  type Tuser {
    data: [user!]
  }
  type user {
    id: ID!
    name: String!
    lastname: String!
    password: String!
    email: String!
    username: String!
  }
  type Mutation {
    createUser(
      name: String!
      lastname: String!
      email: String!
      password: String!
      username: String!
    ): user
  }
`;
