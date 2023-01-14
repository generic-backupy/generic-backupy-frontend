import React from "react";
import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";

function Layout() {
    return (
        <>
            <Navigator/>
            <br/>
            <hr/>
            <div className="container mt-5 pt-5">
            <Outlet />
            </div>
        </>
    );
};

export default Layout;
