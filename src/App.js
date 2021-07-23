import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Fragment, useEffect } from "react";
import Men from "./components/Pages/Men/Men";
import Women from "./components/Pages/Women/Women";
import Kids from "./components/Pages/Kids/Kids";

const App = () => {
	useEffect(() => {});

	return (
		<Fragment>
			<Router>
				<Navbar />

				<Switch>
					<Route exact path='/women' component={Women} />
					<Route exact path='/men' component={Men} />
					<Route exact path='/kids' component={Kids} />
				</Switch>
			</Router>
		</Fragment>
	);
};

export default App;
