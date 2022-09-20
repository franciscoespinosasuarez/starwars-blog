import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../img/star-wars-logo-31.png";
import Dropdown from "../views/Dropdown/Dropdown";

export const Navbar = () => {
	
	return (
		<nav className="navbar navbar-light bg-dark mb-3">
			<div className="container">
			<Link to="/">
				<img src={Logo} alt="Star Wars logo" width="100px"/>
			</Link>
			<Dropdown />
			</div>
		</nav>
	);
};