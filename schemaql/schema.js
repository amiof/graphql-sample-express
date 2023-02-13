import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    checkApiStatus: ApiStatus
  }
  type ApiStatus {
    status: String
  }
`;
