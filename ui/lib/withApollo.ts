import withApollo from "next-with-apollo";
import ApolloClient, { InMemoryCache } from "apollo-boost";
// import { AUTH_TOKEN } from "./constants";

// const middlewareLink = new ApolloLink((operation, forward) => {
//   // get the authentication token from local storage if it exists
//   const tokenValue = localStorage.getItem(AUTH_TOKEN);
//   // return the headers to the context so httpLink can read them
//   operation.setContext({
//     headers: {
//       Authorization: tokenValue ? `Bearer ${tokenValue}` : ""
//     }
//   });
//   return forward(operation);
// });

export default withApollo(
  ({ initialState }) =>
    new ApolloClient({
      uri: "http://localhost:4000",
      cache: new InMemoryCache().restore(initialState || {})
    })
);
