import React from 'react'
const logo = 'https://freepngimg.com/thumb/adidas/58143-stan-logo-smith-shoe-adidas-free-frame-thumb.png';
export const NavBar = () => {
    return (
        <React.Fragment>
        <div className="page-top" />
			<div className="nav-bar">
				<div className="logo">
					<img src={logo} alt ="logo"/>
				</div>

				<div className="menu">
					<ul>
						<a href="/">
							<li>Home</li>
						</a>
						<a href="/men">
							<li>Men</li>
						</a>
						<a href="/women">
							<li>Women</li>
						</a>
						<a href="/kids">
							<li>Kids</li>
						</a>
					</ul>
				</div>
				<div className="search" />
			</div>
            
        </React.Fragment>
    )
}
