import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import classes from './Layout.module.css';
import NavBar from "./NavBar";


const Layout = () => {
    return <Fragment>
        <NavBar />
        <div className={classes.page}>
            <Outlet />
        </div>
        
    </Fragment>
}

export default Layout;
