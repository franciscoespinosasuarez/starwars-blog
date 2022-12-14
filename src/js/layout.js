import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Home } from "./views/home"

import DetailsCharacter from "./views/Details/DetailsCharacters";
import DetailsPlanet from "./views/Details/DetailsPlanet";
import DetailsVehicles from "./views/Details/DetailsVehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/planets/:id" component={DetailsPlanet} />
						<Route exact path="/people/:id" component={DetailsCharacter} />
						<Route exact path="/vehicles/:id" component={DetailsVehicles} />
					</Switch>
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
