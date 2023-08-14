import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import cl from './Navbar.module.scss';

const Navbar: FC = () => {
	return (
		<>
			<nav className={cl.navigation}>
				<ul className={cl.navigation__list}>
					<li className={cl.navigation__item}>
						<Link className={cl.navigation__link} to="/posts">
							Posts
						</Link>
					</li>
					<li className={cl.navigation__item}>
						<Link className={cl.navigation__link} to="/about">
							About
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;
