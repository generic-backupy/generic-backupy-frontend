import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

    //TODO: make a function for the Sign out button's OnClick

    return (
        <nav>
            <Link to="/">Generic Backupy</Link>
            <button>Sign out</button>
        </nav>
    );
};

export default Navbar;
