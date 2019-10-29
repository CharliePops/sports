import App from "next/app";
import { ApolloProvider } from "@apollo/react-hooks";
import withApollo from "../lib/withApollo";
import { ApolloClient } from "apollo-boost";

interface AppProps {
  apollo: ApolloClient<any>;
}

class MyApp extends App<AppProps> {
  render() {
    const { Component, pageProps, apollo } = this.props;

    return (
      <ApolloProvider client={apollo}>
        <Component {...pageProps} />
      </ApolloProvider>
    );
  }
}

export default withApollo(MyApp);
