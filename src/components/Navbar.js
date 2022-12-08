import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <span>Generic Backupy</span>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
