import { ApolloServer } from "apollo-server-express";
import express from "express";
import { typeDefs } from "./schemaql/schema.js";
import { resolvers } from "./resolver/resolver.js";
const app = express();

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
// await server.start();
server.applyMiddleware({ app });

app.listen({ port: 3001 }, () => {
  console.log(" server is up");
});
