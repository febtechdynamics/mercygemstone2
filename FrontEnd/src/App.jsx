import "./App.css";
import Home from "./components/home/Home";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import { Suspense, useEffect, lazy } from "react";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProtectedRoutes from "./components/Admin/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./components/Redux/reducers/authSlice";
import PageLoader from "./components/PageLoader/PageLoader";
// admin
const AdminPanel = lazy(() => import("./components/Admin/AdminPannel"));
const UserList = lazy(() => import("./components/Admin/User/UserList"));
const ProductList = lazy(() =>
  import("./components/Admin/Product/ProductList")
);
const MainContent = lazy(() => import("./components/Admin/MainContent"));

// rest
const Products = lazy(() => import("./components/Products/Products"));
const ProductDetail = lazy(() =>
  import("./components/ProductDetail/ProductDetail")
);
const ContactNew = lazy(() => import("./components/contact/ContactNew"));
const AboutNew = lazy(() => import("./components/about/AboutNew"));
const Shared = lazy(() => import("./components/sharedlayout/Shared"));
const Login = lazy(() => import("./components/login/Login"));
const Four0Four = lazy(() => import("./components/Four0Frour/Four0Four"));

function App() {
  const { pathname } = useLocation();
  const { isAuth, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  useEffect(() => {
    dispatch(getUser(token));
  }, [isAuth, navigate]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  console.log(user);

  return (
    <>
      {/* <ScrollToTop /> */}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<PageLoader />}>
              <Shared />
            </Suspense>
          }
        >
          <Route
            path="/"
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />

          <Route
            path="/products/:id"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductDetail />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<PageLoader />}>
                <AboutNew />
              </Suspense>
            }
          />

          <Route
            path="/login"
            element={
              <Suspense fallback={<PageLoader />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactNew />
              </Suspense>
            }
          />

          <Route
            path="/products"
            element={
              <Suspense fallback={<PageLoader />}>
                <Products />
              </Suspense>
            }
          />
          {/* Only render Admin route if user is logged in */}
        </Route>
        <Route
          path="/admin"
          element={
            <Suspense fallback={<PageLoader />}>
              <ProtectedRoutes>
                <AdminPanel />
              </ProtectedRoutes>
            </Suspense>
          }
        >
          <Route
            path="/admin"
            element={
              <Suspense fallback={<PageLoader />}>
                <MainContent />
              </Suspense>
            }
          />
          <Route
            path="/admin/users"
            element={
              <Suspense fallback={<PageLoader />}>
                <UserList />
              </Suspense>
            }
          />
          <Route
            path="/admin/products"
            element={
              <Suspense fallback={<PageLoader />}>
                <ProductList />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="*"
          element={
            <Suspense fallback={<PageLoader />}>
              <Four0Four />
            </Suspense>
          }
        />
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
