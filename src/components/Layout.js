import React from "react";
import { Outlet } from "react-router-dom";
import Navigator from "./Navigator";
import PropTypes from 'prop-types';
import LoginPage from '../LoginPage';

function Layout({ token, setToken }) {

    return (
        <>
            <Navigator token={token} setToken={setToken}/>
            <br/>
            <hr/>
            <div className="container mt-5 pt-5">
            {token ? <Outlet /> : <LoginPage setToken={setToken}/>}
            </div>
        </>
    );
};

Layout.propTypes = {
  setToken: PropTypes.func.isRequired,
  token: PropTypes.string.isRequired
}

export default Layout;
