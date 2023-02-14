import { data } from "../data/db.js";
import { UserModel } from "../db/schema.js";

export const resolvers = {
  Query: {
    checkApiStatus: () => {
      return { data: data };
    },
    users: async () => {
      const users = await UserModel.find({});
      return users;
    },
  },
  Mutation: {
    createUser: async (parent, arg) => {
      console.log(arg);
      const user = await UserModel.create({ ...arg });
      return user;
    },
  },
};
