import React from "react";
import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import PropTypes from 'prop-types';

function Layout({ token, setToken }) {
    return (
        <>
            <Navigator token={token} setToken={setToken}/>
            <br/>
            <hr/>
            <div className="container mt-5 pt-5">
            <Outlet />
            </div>
        </>
    );
};

Layout.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default Layout;
