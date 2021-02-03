import React from 'react';
import { NavLink } from 'react-router-dom';
const logo = 'https://download.logo.wine/logo/Adidas/Adidas-Logo.wine.png';
export const NavBar = () => {
	return (
		<React.Fragment>
			<div className="page-top" />
			<div className="nav-bar">
				<div className="logo">
					<img src={logo} alt="logo" />
				</div>

				<div className="menu">
					<ul>
						<NavLink exact activeClassName='active-class' to="/"><li>Home</li></NavLink>
						<NavLink exact activeClassName='active-class' to="/men"><li>Men</li></NavLink>
						<NavLink exact activeClassName='active-class' to="/women"><li>Women</li></NavLink>
						<NavLink exact activeClassName='active-class' to="/kids"><li>Kids</li></NavLink>
					</ul>
				</div>
				<div className="search" />
			</div>
		</React.Fragment>
	);
};
