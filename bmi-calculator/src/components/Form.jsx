import classes from './Form.module.css';

function Form() {
  return (
    <div className={classes.container}>
      <form className={classes.form}>
        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" />
        <label htmlFor="height">Height</label>
        <input type="number" id="height" />
        <button>Calculate</button>
      </form>
    </div>
  );
}

export default Form;
