import { ApolloServer } from 'apollo-server';
import * as articleResolver from './resolvers/articles.resolver';
import { connectDb, disconnectDb } from './providers/db.provider';

const PORT = process.env.PORT || "9000"

async function bootstrap() {
  const server = new ApolloServer({
    cors: { origin: '*' },
    dataSources: () => ({}),
    debug: true,
    resolvers: {
      Query: { ...articleResolver.Query },
      Mutation: { ...articleResolver.Mutation },
    },
    typeDefs: require('fs').readFileSync('src/schema/article.schema.graphql').toString('utf-8'),
  })

  await connectDb();
  const { url } = await server.listen(PORT);
  console.log(`Server is running, GraphQL Playground available at ${url}`);

  process.on('SIGINT', async () => {
    await disconnectDb();
    await server.stop();
    console.log(`Server is stop`);
    process.exit(0);
  });
}

bootstrap();
