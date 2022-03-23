import {
  ApolloClient, InMemoryCache,
} from '@apollo/client';

export const IMG = process.env.NEXT_PUBLIC_IMG;

const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
export default client;
