const { makeExecutableSchema } = require("@graphql-tools/schema");
const { GraphQLUpload } = require("graphql-upload");
const uploadFileFunction = require("./uploadfile");

module.exports = makeExecutableSchema({
  typeDefs: `
    scalar Upload
    type File {
        filename: String
        mimetype: String
        encoding: String
        uri: String
    }
    type Query {
        uploads: [File]
      }
    type Mutation {
        uploadFile(file: Upload!): File
    }    
    `,
  resolvers: {
    Upload: GraphQLUpload,
    Mutation: {
      uploadFile: (_, { file }) => uploadFileFunction(file),
    },
  },
});
