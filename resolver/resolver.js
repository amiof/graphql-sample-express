import { data } from "../data/db.js";
export const resolvers = {
  Query: {
    checkApiStatus: () => {
      return { data: data };
    },
  },
};
