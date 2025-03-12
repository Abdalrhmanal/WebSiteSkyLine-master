import { Outlet } from "react-router-dom";
import BackToTop from "../components/GoToWhatsApp";

const Layout = () => {
  return (
    <>
      <Outlet />
      <BackToTop />
    </>
  );
};

export default Layout;
