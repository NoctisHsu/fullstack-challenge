import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { DAppProvider } from "@usedapp/core";
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "~/src/components/Layout";
import Header from "~/src/components/Header";
import Footer from "~/src/components/Footer";
const client = new ApolloClient({
  uri: "http://localhost:9000/",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <DAppProvider config={{}}>
        <ChakraProvider>
          <Layout>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </Layout>
        </ChakraProvider>
      </DAppProvider>
    </ApolloProvider>
  );
}

export default MyApp;
