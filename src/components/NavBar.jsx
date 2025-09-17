import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";

function NavBar() {
    return (
    <nav className="navbar">
        <div className="navbar__inner">
            <a href="/" className="navbar__brand">
                <div className="navbar__logo">S</div>
                <div className="navbar__title">Skinn Savvy</div>
            </a>

            <div className="navbar__links">
                <a className="navlink navlink--active" >
                <Link to="/">
                    Home
                </Link>
                </a>
                <a className="navlink">
                <Link to="/shop">
                    Shop
                </Link>
                </a>
                <a className="navlink">
                <Link to="/profile">
                    Profile
                </Link>
                </a>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <a className="navbar__cta">
                <Link to="/login">
                        Login
                </Link>
                </a>
                <button className="navbar__menu-toggle" aria-label="Open menu">☰</button>
            </div>
        </div>
    </nav>
    )
}
export default NavBar;

