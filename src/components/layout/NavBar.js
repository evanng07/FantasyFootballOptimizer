import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import BarChartIcon from '@mui/icons-material/BarChart';
import SearchIcon from "@mui/icons-material/Search";

const NavBar = () => {
  return (
    <div className={classes.sidebar}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" className={classes.text}>
              <HomeIcon className={classes.icon} fontSize="large" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/team" className={classes.text}>
              <GroupsIcon className={classes.icon} fontSize="large" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/stat" className={classes.text}>
              <BarChartIcon className={classes.icon} fontSize="large" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={classes.text}>
              <SearchIcon className={classes.icon} fontSize="large" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
