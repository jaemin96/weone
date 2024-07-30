import { ApolloClient, InMemoryCache, createHttpLink, from } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: `http://localhost:4000/graphql`,
})

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
    }
  };
});

export const client = new ApolloClient({
  link: from([authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});
