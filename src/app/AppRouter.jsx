import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Cart = lazy(() => import("../pages/Cart"));

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="products"
          element={
            <Suspense fallback={<div />}>
              <Products />
            </Suspense>
          }
        />
        <Route
          path="cart"
          element={
            <Suspense fallback={<div />}>
              <Cart />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
