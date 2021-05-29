import React from 'react';
import classes from './Header.module.scss';
import CartButton from '../Cart/CartButton';

const Header = (props) => {
	return (
		<header className={classes.header}>
			<div className={`wrapper ${classes.wrapper}`}>
				<h1>
					<a href="/" title="MyFood">MyFood</a>
				</h1>
				<CartButton onClick={props.onShowCart} />
			</div>
		</header>
	)
}
export default Header;

