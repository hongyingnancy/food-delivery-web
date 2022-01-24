import { useRef, useState, Fragment } from "react";

import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";


const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 8
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="Quantity"
          input={{
            id: "amount_" + props.id,
            type: "number",
            min: "1",
            max: "8",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>Add</button>
        {!amountIsValid && <p>Please enter a number between 1-8.</p>}
      </form>
      <br></br>
      <div className={classes.price}>{`$`+props.price}</div>
    </Fragment>
  );
};

export default MealItemForm;
