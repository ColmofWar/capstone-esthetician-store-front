import React from "react";
import { Outlet } from "react-router-dom";

function Shop() {
    return (
        <div>
            <h1>Skinn Savvy's Shop</h1>
            <p className="muted">Browse products and click to view details.</p>
            <div>
                {/* Nested product route will render here via Outlet */}
                <Outlet />
            </div>
        </div>
    )
}

export default Shop;