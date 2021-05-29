import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const{ items } = cartCtx;
  const NumberofCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0); //Reduce method works on array and gives number of unique items present

  
  const [btnAnimation, setBtnAnimation] = useState(false);
  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ''}`
  
  useEffect(()=>{
    if(items.length===0){
      return
    }
    setBtnAnimation(true);
    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    return () => {        //Not Required but clearing timer is a good practice
      clearTimeout(timer);
    }
  },[items])

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart </span>
      <span className={classes.badge}>{NumberofCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
