import React from 'react';
import { Link } from 'react-router-dom';
const logo = 'https://freepngimg.com/thumb/adidas/58143-stan-logo-smith-shoe-adidas-free-frame-thumb.png';
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
						<Link to="/"><li>Home</li></Link>
						<Link to="/men"><li>Men</li></Link>
						<Link to="/women"><li>Women</li></Link>
						<Link to="/kids"><li>Kids</li></Link>
					</ul>
				</div>
				<div className="search" />
			</div>
		</React.Fragment>
	);
};
