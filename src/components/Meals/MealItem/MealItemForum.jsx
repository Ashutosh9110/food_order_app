import Input from "../../UI/Input"
import classes from "./MealItemForum.module.css"

const MealItemForum = (props) => {
  return (
    <form className={classes.form}>
      <Input label="Amount" input={{
        id: "amount",
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1"

      }} /> 
      {/* // Why two curly braces? since value is an object..first curly braces is used to evaluate a JS expression which is passed in as a value and then that expression just happens to be a JS object. */}
      <button>+ Add</button>
    </form>
  )
}

export default MealItemForum