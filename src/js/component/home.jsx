import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./About";
import Inicio from "./Inicio";
import Usuarios from "./Usuarios";

const Home = () => {
	return (
		<Router>
			<Switch>
				<Route path="/about">
					<About />
				</Route>
				<Route path="/users">
					<Usuarios />
				</Route>
				<Route path="/">
					<Inicio />
				</Route>
			</Switch>
		</Router>
	);
};

export default Home;
