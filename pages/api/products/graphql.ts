import { ApolloServer } from "apollo-server-micro";
import { buildSchema } from "type-graphql";
import { PostResolver } from "../../../graphql/resolvers/PostResolver";


async function main() {


    const schema = await buildSchema({
        resolvers: [
            PostResolver
        ]
    });
    const apolloServer = new ApolloServer({ schema });

    return apolloServer.createHandler({ path: "/api/graphql" });
}

export const config = {
    api: {
        bodyParser: false
    }
};

export default main