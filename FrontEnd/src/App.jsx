import "./App.css";
import Home from "./components/home/Home";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
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
import AdminPanel from "./components/Admin/AdminPannel";
import UserList from "./components/Admin/UserList";
import ProductList from "./components/Admin/ProductList";
import Products from "./components/Products/Products";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import ContactNew from "./components/contact/ContactNew";
import AboutNew from "./components/about/AboutNew";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route path="/" element={<Shared />}>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/product/:id" element={<IndustrialDetail />} /> */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutNew />} />
          {/* <Route path="/about" element={<AboutDetail />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<ContactNew />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          {/* <Route path="/gemston-list" element={<GemstoneList />} />
          <Route path="/industrial-list" element={<IndustrialList />} /> */}
          <Route path="/products" element={<Products />} />
          {/* Only render Admin route if user is logged in */}
        </Route>
        <Route path="/admin" element={<AdminPanel />}>
          <Route path="/admin/users" element={<UserList />} />
          <Route path="/admin/products" element={<ProductList />} />
        </Route>
        <Route path="*" element={<Four0Four />} />
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
