import classes from "./Input.module.css"

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input id={props.input.id} {...props.input} /> 
      {/* // this ensures that all the key value pairs in the input object which we recieve from props.input are added as props to inputs. */}
    </div>

  )
}

export default Input