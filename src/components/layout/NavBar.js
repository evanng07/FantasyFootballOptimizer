import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink>Test</NavLink>
          </li>
          <li>
            <NavLink>Data</NavLink>
          </li>
          <li>
            <NavLink>Here</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
