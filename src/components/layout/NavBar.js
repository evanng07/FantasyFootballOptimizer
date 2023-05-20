import React, { useState } from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import BarChartIcon from "@mui/icons-material/BarChart";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${classes.sidebar} ${collapsed ? classes.collapsed : ""}`}>
      <button className={classes.toggleButton} onClick={toggleCollapse}>
      {collapsed ? (
                <MenuIcon className={classes.icon} fontSize="large" />
              ) : (
                <>
                  <MenuIcon className={classes.icon} fontSize="large" />
                  <div className={classes.iconTextMenu}>Menu</div>
                </>
              )}
      </button>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/home" className={classes.text}>
              {collapsed ? (
                <HomeIcon className={classes.icon} fontSize="large"/>
              ) : (
                <>
                  <HomeIcon className={classes.icon} fontSize="large" onClick={toggleCollapse} />
                  <span className={classes.iconText} onClick={toggleCollapse} >Home</span>
                </>
              )}
            </NavLink>
          </li>
          <li >
            <NavLink to="/team" className={classes.text}>
              {collapsed ? (
                <GroupsIcon className={classes.icon} fontSize="large" />
              ) : (
                <>
                  <GroupsIcon className={classes.icon} fontSize="large" onClick={toggleCollapse} />
                  <span className={classes.iconText} onClick={toggleCollapse}>Team</span>
                </>
              )}
            </NavLink>
          </li>
          <li >
            <NavLink to="/stat" className={classes.text}>
              {collapsed ? (
                <BarChartIcon className={classes.icon} fontSize="large" />
              ) : (
                <>
                  <BarChartIcon className={classes.icon} fontSize="large" onClick={toggleCollapse} />
                  <span className={classes.iconText} onClick={toggleCollapse}>Stats</span>
                </>
              )}
            </NavLink>
          </li>
          <li >
            <NavLink to="/search" className={classes.text}>
              {collapsed ? (
                <SearchIcon className={classes.icon} fontSize="large" />
              ) : (
                <>
                  <SearchIcon className={classes.icon} fontSize="large" onClick={toggleCollapse} />
                  <span className={classes.iconText} onClick={toggleCollapse}>Search</span>
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
