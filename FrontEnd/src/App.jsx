import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Shared from "./components/sharedlayout/Shared";
import AboutDetail from "./components/about/AboutDetail";
import Login from "./components/login/Login";
import Contact from "./components/contact/Contact";
import IndustrialDetail from "./components/IndustrialDetail/IndustrialDetail";
import GemstoneList from "./components/GemstonList/GemstonList";
import IndustrialList from "./components/IndutrialList/IndustrialList";
import Four0Four from "./components/Four0Frour/Four0Four";
import { useEffect, useState } from "react";
import Admin from "./components/Admin/Admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status here and set isLoggedIn accordingly
    const token = localStorage.getItem("token");
    console.log(isLoggedIn);
    if (token) {
      setIsLoggedIn(true);
      console.log(`token from if close ${token}`);
    } else {
      setIsLoggedIn(false);
      console.log(`token from else close ${token}`);
    }
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Shared />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<IndustrialDetail />} />
          <Route path="/about" element={<AboutDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gemston-list" element={<GemstoneList />} />
          <Route path="/industrial-list" element={<IndustrialList />} />
          {/* Only render Admin route if user is logged in */}
          {isLoggedIn ? (
            <Route path="/admin" element={<Admin />} />
          ) : (
            <Route path="/admin" element={<Navigate to="/login" />} />
          )}
          <Route path="*" element={<Four0Four />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
