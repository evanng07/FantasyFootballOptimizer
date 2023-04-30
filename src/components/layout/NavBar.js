import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={classes.text}>Test</NavLink>
          </li>
          <li>
            <NavLink className={classes.text}>Data</NavLink>
          </li>
          <li>
            <NavLink className={classes.text}>Here</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
