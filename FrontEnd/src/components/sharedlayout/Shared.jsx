import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import NavBar from "../header/NavBar";

const Shared = () => {
  return (
    <div>
      {/* <Header /> */}
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Shared;
