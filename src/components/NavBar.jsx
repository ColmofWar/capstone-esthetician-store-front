import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import CartIcon from "../assets/CartIcon";

function NavBar({ cartCount = 0 }) {
    const [bump, setBump] = useState(false);
    const prevCount = useRef(cartCount);

    useEffect(() => {
        if (cartCount > 0 && prevCount.current !== cartCount) {
            setBump(true);
            const t = setTimeout(() => setBump(false), 500);
            return () => clearTimeout(t);
        }
        prevCount.current = cartCount;
    }, [cartCount]);

    return (
    <nav className="navbar">
        <div className="navbar__inner">
            <Link to="/" className="navbar__brand">
                <div className="navbar__logo">S</div>
                <div className="navbar__title">Skinn Savvy</div>
            </Link>

            <div className="navbar__links">
                <Link to="/" className="navlink navlink--active">Home</Link>
                <Link to="/shop" className="navlink">Shop</Link>
                <Link to="/profile" className="navlink">Profile</Link>
            </div>

            <div className="nav-action">
                <Link to="/cart" className="navlink" aria-label="Cart">
                    <div className="cart-wrapper">
                        <CartIcon className={`cart-icon ${bump ? 'cart-bump' : ''}`} size={20} title="Shopping cart" />
                        {cartCount > 0 && (
                            <span className={`cart-badge ${bump ? 'cart-bump' : ''}`}>{cartCount}</span>
                        )}
                    </div>
                </Link>
            </div>

            <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                <Link to="/login" className="navbar__cta">Login</Link>
                <button className="navbar__menu-toggle" aria-label="Open menu">☰</button>
            </div>
        </div>
    </nav>
    )
}
export default NavBar;

