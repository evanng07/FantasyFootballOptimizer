import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home"  className={classes.text}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/team" className={classes.text}>Team</NavLink>
          </li>
          <li>
            <NavLink to="/stat" className={classes.text}>Stats</NavLink>
          </li>
          <li>
            <NavLink to="/search" className={classes.text}>Search</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
