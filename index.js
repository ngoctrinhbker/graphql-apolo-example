const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema")
const { resolvers } = require("./resolvers")

const server = new ApolloServer({ typeDefs, resolvers, context: {} });

server.listen().then(({ url }) => {
  console.log("==========ready", { url });
});
