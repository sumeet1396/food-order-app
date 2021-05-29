import classes from './CartButton.module.scss';
import { FaCartPlus } from 'react-icons/fa'

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <FaCartPlus size="2rem"/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
