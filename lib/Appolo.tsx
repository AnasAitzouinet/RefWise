"use client"
import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const httpLink = new HttpLink({
  uri: "http://localhost:8080/graphql",
  fetchOptions: { cache: "no-store" },
});

function makeClient() {
  return new NextSSRApolloClient({
      cache: new NextSSRInMemoryCache(),
      link: 
        typeof window === "undefined" ?
        ApolloLink.from([new SSRMultipartLink({
            stripDefer: true,
          }), httpLink]) :
        httpLink,
  });
}


export default function ApolloProvider({ children } : { children: React.ReactNode }) {
  return (
    <ApolloNextAppProvider  makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}