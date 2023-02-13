import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    checkApiStatus: ApiStatus
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
`;
