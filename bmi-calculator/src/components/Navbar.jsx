import classes from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={classes.nav}>
      <a href="#" className={classes.a}>
        BMI Calculator
      </a>
    </nav>
  );
}

export default Navbar;
