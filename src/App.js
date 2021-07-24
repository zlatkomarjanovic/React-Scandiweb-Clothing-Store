import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import Men from "./components/Pages/Men/Men";
import Tech from "./components/Pages/Tech/Tech";
import Kids from "./components/Pages/Kids/Kids";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphqlErrors, networkError }) => {
	if (graphqlErrors) {
		graphqlErrors.map(({ message, location, path }) => {
			alert(`Graphql error ${message}`);
		});
	}
});

const link = from([errorLink, new HttpLink({ uri: "http://localhost:4000" })]);

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: link,
});
const App = () => {
	useEffect(() => {});

	return (
		<Fragment>
			<ApolloProvider client={client}>
				<Router>
					<Navbar />

					<Switch>
						<Route exact path='/tech' component={Tech} />
						<Route exact path='/men' component={Men} />
						<Route exact path='/kids' component={Kids} />
					</Switch>
				</Router>
			</ApolloProvider>
		</Fragment>
	);
};

export default App;
