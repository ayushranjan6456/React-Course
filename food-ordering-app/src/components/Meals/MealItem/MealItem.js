import {useContext} from 'react';
import MealItemForm from './MealItemForm';

import classes from './MealItem.module.css';
import CartContext from '../../../store/cart-context';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext)

  const price = `$ ${props.price.toFixed(2)}`;

  const AddToCartHandler = amount => {
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }
  return (
    <li>
      <div className={classes.meal}>
        <h3>{props.name}</h3>
      </div>
      <div className={classes.description}>{props.description}</div>
      <div className={classes.price}>{price}</div>
      <div>
        <MealItemForm onAddToCart={AddToCartHandler} id={props.id}/>
      </div>
    </li>
  )
}

export default MealItem