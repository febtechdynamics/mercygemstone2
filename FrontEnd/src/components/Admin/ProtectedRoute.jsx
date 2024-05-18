import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoutes({ children }) {
  let { isAuth, user } = useSelector((state) => state.auth);

  let navigate = useNavigate();

  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }

  useEffect(() => {
    if (isEmpty(user) && !isAuth) {
      navigate("/login", { replace: true });
    }
  }, [isAuth]);

  return children;
}

export default ProtectedRoutes;
