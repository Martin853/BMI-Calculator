import classes from './Result.module.css';

function Result(props) {
  return (
    <div className={classes.result}>
      <h1>Result</h1>
      <h2>Category: {props.category}</h2>
      <h2>BMI Result: {props.result}</h2>
    </div>
  );
}

export default Result;
