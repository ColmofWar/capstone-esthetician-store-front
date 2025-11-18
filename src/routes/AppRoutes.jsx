import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../components/Home'));
const Shop = lazy(() => import('../components/Shop'));
const Product = lazy(() => import('../components/Product'));
const Profile = lazy(() => import('../components/Profile'));
const Login = lazy(() => import('../components/Login'));
const ShoppingCart = lazy(() => import('../components/ShoppingCart'));

export default function AppRoutes() {
  return (
    <Suspense fallback={<div className="loading">Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />}>
            <Route path="product/:name" element={<Product />} />
        </Route>
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Suspense>
  );
}
