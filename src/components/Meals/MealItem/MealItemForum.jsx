import { useRef, useState } from "react"
import Input from "../../UI/Input"
import classes from "./MealItemForum.module.css"

const MealItemForum = (props) => {

  const [ amountIsValid, setAmountIsValid ] = useState(true)

  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()

    const enteredAmount = amountInputRef.current.value
    const enteredAmountNumber = +enteredAmount

    if (
      enteredAmount.trim().length === 0 || 
      enteredAmountNumber < 1 || 
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return 
    }
    props.onAddToCart(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input  
        ref={amountInputRef}
        label="Amount"
        input={{
        id: "amount",
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1"

      }} /> 
      {/* // Why two curly braces? since value is an object..first curly braces is used to evaluate a JS expression which is passed in as a value and then that expression just happens to be a JS object.
 */}
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1 - 5).</p>}
    </form>
  )
}

export default MealItemForum