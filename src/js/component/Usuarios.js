import React from "react";
import { Link } from "react-router-dom";
const Usuarios = () => {
	return (
		<div>
			<h1>Usuarios</h1>;
			<nav>
				<ul>
					<li>
						<Link to="/">ir a Home</Link>
					</li>
					<li>
						<Link to="/about">ir a About</Link>
					</li>
					<li>
						<Link to="/users">ir a Usuarios</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};

export default Usuarios;
