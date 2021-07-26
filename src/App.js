import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import Clothes from "./components/Pages/Clothes/Clothes";
import Tech from "./components/Pages/Tech/Tech";

import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	HttpLink,
	from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import All from "./components/Pages/All/All";
import Cart from "./components/Pages/Cart/Cart";
import { CartProvider } from "react-use-cart";

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
			<CartProvider>
				<ApolloProvider client={client}>
					<Router>
						<Navbar />

						<Switch>
							<Route exact path='/all' component={All} />
							<Route exact path='/' component={Tech} />
							<Route exact path='/tech' component={Tech} />
							<Route exact path='/clothes' component={Clothes} />
							<Route exact path='/cart' component={Cart} />
						</Switch>
					</Router>
				</ApolloProvider>
			</CartProvider>
		</Fragment>
	);
};

export default App;
