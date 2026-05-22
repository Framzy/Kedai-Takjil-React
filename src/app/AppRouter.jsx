import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./Layout";

const Home = lazy(() => import("../pages/Home"));
const Products = lazy(() => import("../pages/Products"));
const Carts = lazy(() => import("../pages/Carts"));

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
      </Route>
      <Route path="/products" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div />}>
              <Products />
            </Suspense>
          }
        />
      </Route>
      <Route path="/products" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div />}>
              <Carts />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
}

export default AppRouter;
