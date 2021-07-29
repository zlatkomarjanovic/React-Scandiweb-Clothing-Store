import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../Logo/logo.png";
import MiniCart from "../Pages/Cart/MiniCart";

const Navbar = () => {
	const [minicartIsOpen, setMiniCart] = useState(false);
	return (
		<header className='container'>
			<nav className='nav'>
				<input type='checkbox' id='nav-check'></input>

				<div className='nav-btn'>
					<label for='nav-check'>
						<span></span>
						<span></span>
						<span></span>
					</label>
				</div>

				<ul className='nav_links_1'>
					<NavLink exact to='/tech' className='nav-links'>
						Tech
					</NavLink>

					<NavLink exact to='/clothes' className='nav-links'>
						Clothes
					</NavLink>
					<NavLink exact to='/all' className='nav-links'>
						All
					</NavLink>
				</ul>
			</nav>
			<span className='nav-links'>
				<img className='logo' alt='Logo' src={logo} />
			</span>
			<div>
				<span className='nav-links'>
					<i className='fas fa-dollar-sign nav_icons'></i>
				</span>
				<span className='nav-links right'>
					<span onClick={() => setMiniCart(true)}>
						<i className='fas fa-shopping-cart nav_icons cart_icon '></i>
					</span>
				</span>
			</div>
			<MiniCart minicartIsOpen={minicartIsOpen} setMiniCart={setMiniCart} />
		</header>
	);
};

export default Navbar;
