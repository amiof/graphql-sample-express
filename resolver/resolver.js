export const resolvers = {
  Query: {
    checkApiStatus: () => {
      return { status: "the api is working correctly" };
    },
  },
};
