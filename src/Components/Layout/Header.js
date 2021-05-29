import React from 'react';
import classes from './Header.module.scss';

const Header = () => {
	return (
		<header className={classes.header}>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1>
					<a href="/" title="MyFood">MyFood</a>
				</h1>
				<button>Cart</button>
			</div>
		</header>
	)
}
export default Header;

