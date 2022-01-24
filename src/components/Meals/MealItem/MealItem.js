import { useContext } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/cart-context";
// import pic from "../../../assets/meals.jpg";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };



  return (
    <li className={classes.meal}>
      <div className={classes.container}>
        <div >
          <img src={props.picture} width="490" height="200" alt="item-pic" />
        </div>
        <div className={classes.text}>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          {/* <div className={classes.price}>{price}</div> */}
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} price={props.price} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
