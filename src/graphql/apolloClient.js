import { createHttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import authStorage from "../utils/authStorage";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_HASURA_GRAPHQL_ENDPOINT,
});

console.log("GraphQL Endpoint:", process.env.REACT_APP_HASURA_GRAPHQL_ENDPOINT);
console.log("Hasura Admin Secret:", process.env.REACT_APP_HASURA_ADMIN_SECRET);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    console.log("[graphQLErrors]", graphQLErrors);
    graphQLErrors.forEach(({ extensions }) => {
      if (extensions.code === "invalid-jwt") {
        authStorage.clearToken();
        alert("Session Expired, Please Sign In With Your Credentials Again");
      }
    });
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    alert("network connection problem");
  }
});

const createApolloClient = () => {
  const authLink = setContext(async (_, { headers }) => {
    try {
      return {
        headers: {
          ...headers,
          "x-hasura-admin-secret":
            "ufBB46MNkGJIJDAenfM0WCCkhfOwGJJ2HpjFPMtZ7yd3MW3b14s7O5w5olc9165C",
        },
      };
    } catch (e) {
      return {
        headers,
      };
    }
  });

  return new ApolloClient({
    link: errorLink.concat(authLink).concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
