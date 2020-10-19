
// import { loadSchemaSync } from '@graphql-tools/load';
// import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
// import { addResolversToSchema } from '@graphql-tools/schema';
// import { join } from 'path';

// import { makeExecutableSchema } from '@graphql-tools/schema';
const { loadSchema } = require('@graphql-tools/load');
const { JsonFileLoader } = require('@graphql-tools/json-file-loader');



import { ApolloServer } from "apollo-server-azure-functions";
import { importSchema } from "graphql-import";
import resolvers from "./resolvers";
import { dataStore } from "./data";

// const schema = loadSchemaSync(join(__dirname, 'schema.graphql'), { loaders: [new GraphQLFileLoader()] });


// const schemaWithResolvers = addResolversToSchema({
//     schema,
//     resolvers,
// });


const server = new ApolloServer({
    typeDefs: importSchema("./TriviaGraphQL/schema.graphql"),
    resolvers,
    context: {
        dataStore,
    },
});

// module.exports = server.createHandler({
//     cors: {
//         origin: "http://localhost:3000",
//         credentials: true,
//         allowedHeaders: ["Content-Type", "Origin", "Accept"],
//     },
// });

export default server.createHandler();
