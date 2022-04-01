import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // uri: 'https://blog-strapi-dznx.herokuapp.com/graphql',
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache(),
});
export default client;
