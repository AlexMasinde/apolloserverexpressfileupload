const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { graphqlUploadExpress } = require("graphql-upload");
const schema = require("./schema");

async function startApolloServer() {
  const server = new ApolloServer({
    schema,
    uploads: false,
    context: ({ req, res }) => {
      return {
        req,
        res,
      };
    },
  });
  await server.start();

  const app = express();
  app.use(
    graphqlUploadExpress({
      maxFieldSize: 1000000,
      maxFiles: 20,
    })
  );
  server.applyMiddleware({ app });

  await new Promise((resolve) => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
  return { server, app };
}

startApolloServer();
