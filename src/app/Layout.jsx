import { Outlet } from "react-router-dom";
import Footer from "../components/layout/Footer";

function Layout() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
