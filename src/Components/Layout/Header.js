import React from 'react';
import classes from './Header.module.scss';
import CartButton from '../Cart/CartButton';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1>
					<a href="/" title="MyFood">MyFood</a>
				</h1>
				<CartButton />
			</div>
		</header>
	)
}
export default Header;

