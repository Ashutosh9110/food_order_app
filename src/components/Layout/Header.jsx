import { Fragment } from "react"
import mealsImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"

const Header = (props) => {
  
  return (
    <Fragment>
      <header>
        <h1 className={classes.header}>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImg} alt="A table full of delicious food" />
      </div>
    </Fragment>
  )
}


export default Header