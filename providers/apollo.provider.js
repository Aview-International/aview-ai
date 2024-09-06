import { baseUrl } from '../services/baseUrl';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
  // createHttpLink,
} from '@apollo/client';
import Cookies from 'js-cookie';
import { setContext } from '@apollo/client/link/context';
// import { createUploadLink } from 'apollo-upload-client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';

const httpAndUploadLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_BASE_URL + 'graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = Cookies.get('token');
  const fingerprint = Cookies.get('fingerprint');
  return {
    headers: {
      ...headers,
      'x-device-id': fingerprint,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const ApolloProvider = ({ children }) => {
  const client = new ApolloClient({
    link: authLink.concat(httpAndUploadLink),
    cache: new InMemoryCache(),
    // headers: getHeaders(),
  });

  return <Provider client={client}>{children}</Provider>;
};

export default ApolloProvider;
