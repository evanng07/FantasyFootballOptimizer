import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={classes.text}>Home</NavLink>
          </li>
          <li>
            <NavLink className={classes.text}>Team</NavLink>
          </li>
          <li>
            <NavLink className={classes.text}>Search</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
