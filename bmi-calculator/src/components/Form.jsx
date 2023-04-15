import { useState } from 'react';
import classes from './Form.module.css';
import Result from './Result';

function Form() {
  const [result, setResult] = useState();
  const [category, setCategory] = useState();
  const [visibleResult, setVisibleResult] = useState(false);
  const [weightValidationVisible, setWeightValidationVisible] = useState(false);
  const [heightValidationVisible, setHeightValidationVisible] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    const weightInput = document.querySelector('#weight');
    const heightInput = document.querySelector('#height');

    // Validation

    if (weightInput.value.trim() == '' || weightInput.value.trim() < 1) {
      setWeightValidationVisible(true);
      return;
    } else {
      setWeightValidationVisible(false);
    }

    if (heightInput.value.trim() == '' || heightInput.value.trim() < 1) {
      setHeightValidationVisible(true);
      return;
    } else {
      setHeightValidationVisible(false);
    }

    // Make the result visible

    setVisibleResult(true);

    // Result

    const finalResult =
      Math.round((weightInput.value / (heightInput.value * 0.01) ** 2) * 10) /
      10;
    setResult(finalResult);

    // Category

    if (finalResult < 18.5) {
      setCategory('Underweight');
    } else if (finalResult >= 18.5 && finalResult < 25) {
      setCategory('Normal Weight');
    } else if (finalResult >= 25 && finalResult < 30) {
      setCategory('Overweight');
    } else {
      setCategory('Obese');
    }
  }

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={submitHandler}>
        <label htmlFor="weight">Weight</label>
        <input type="number" id="weight" />
        {weightValidationVisible ? (
          <span style={{ color: 'red' }}>Input a Correct Value</span>
        ) : null}
        <label htmlFor="height">Height</label>
        <input type="number" id="height" />
        {heightValidationVisible ? (
          <span style={{ color: 'red' }}>Input a Correct Value</span>
        ) : null}
        <button type="submit">Calculate</button>
      </form>
      {visibleResult ? <Result result={result} category={category} /> : null}
    </div>
  );
}

export default Form;
