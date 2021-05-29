import React from 'react';
import classes from './Header.module.scss';

const Banner = () => {
	return (
		<figure className={classes['main-image']}>
			<img src="./assets/images/meals.jpg" alt="A table full of delicious food!" />
		</figure>
	)
}
export default Banner;
