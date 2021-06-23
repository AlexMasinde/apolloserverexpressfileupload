const { gql } = require("apollo-server-express");

module.exports = gql`
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
    uploadFile(files: [Upload!]): [File]
  }
`;
