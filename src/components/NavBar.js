import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <nav className="NavBar">
            <Link to="/">
                Home
            </Link>
            <Link to="/shop">
                Shop
            </Link>
            <Link to="/profile">
                Profile
            </Link>
            <Link to="/login">
                Login
            </Link>
        </nav>
    )
}