import classes from './Form.module.css';

function Form() {
  function submitHandler(event) {
    event.preventDefault();
    const weightInput = document.querySelector('#weight');
    const heightInput = document.querySelector('#height');
    console.log(weightInput.value / heightInput.value ** 2);
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" />
        <label htmlFor="height">Height</label>
        <input type="number" id="height" />
        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default Form;
