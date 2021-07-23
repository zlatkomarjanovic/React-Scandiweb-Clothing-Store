import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	useQuery,
	gql,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "https://48p1r2roz4.sse.codesandbox.io",
	cache: new InMemoryCache(),
});

client
	.query({
		query: gql`
			query GetRates {
				rates(currency: "USD") {
					currency
				}
			}
		`,
	})
	.then((result) => console.log(result));

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
