import withApollo from "next-with-apollo";
import ApolloClient, {
  InMemoryCache,
  ApolloLink,
  HttpLink
} from "apollo-boost";
import { AUTH_TOKEN } from "./constants";

const httpLink = new HttpLink({ uri: "http://localhost:4000" });

const middlewareLink = new ApolloLink((operation, forward) => {
  // get the authentication token from local storage if it exists
  const tokenValue = localStorage.getItem(AUTH_TOKEN);
  // return the headers to the context so httpLink can read them
  operation.setContext({
    headers: {
      Authorization: tokenValue ? `Bearer ${tokenValue}` : ""
    }
  });
  return forward(operation);
});

const httpLinkAuth = middlewareLink.concat(httpLink);

export default withApollo(
  ({ ctx, headers, initialState }) =>
    new ApolloClient({
      // @ts-ignore
      uri: "http://localhost:4000",
      cache: new InMemoryCache().restore(initialState || {})
    })
);
