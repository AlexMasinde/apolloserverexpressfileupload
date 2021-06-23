const { makeExecutableSchema } = require("@graphql-tools/schema");
const { GraphQLUpload } = require("graphql-upload");
const resolvers = require("./resolvers");
const typeDefs = require("./typeDefs");

module.exports = makeExecutableSchema({
  typeDefs: typeDefs,
  resolvers: {
    Upload: GraphQLUpload,
    Mutation: {
      ...resolvers.Mutations,
    },
  },
});
