import { ApolloClient, InMemoryCache, NormalizedCacheObject } from '@apollo/client';

// Initialize Apollo Client with TypeScript type annotation for better type checking
const client: ApolloClient<NormalizedCacheObject> = new ApolloClient({
  uri: '', // Replace this with your actual GraphQL server URI
  cache: new InMemoryCache(),
});

export default client;
