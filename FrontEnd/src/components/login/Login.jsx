import { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const userData = {
      email,
      password,
    };
    if (!email || !password) {
      return toast.error("Please fill all fields");
    }

    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_base_url}/api/user/login`,
        userData,
        config
      );
      console.log("Login Response:", response.data); // Log response data
      const token = response.data.token;
      localStorage.setItem("token", token);
      setIsLoading(false); // Set token in local storage
      navigate("/admin");
      toast.success(response.data.message);
    } catch (error) {
      console.error("Login Error:", error);
      toast.error(error.response?.data?.message || "An error occurred");
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value.trim())}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value.trim())}
          />
        </div>
        <button type="submit" className="w-25" disabled={isLoading}>
          {isLoading ? (
            <div className="w-100 d-flex gap-3 justify-content-between align-items-center">
              <span
                class="ms-3 spinner-border spinner-border-sm"
                role="status"
              ></span>

              <div>Sign...</div>
            </div>
          ) : (
            <div>Sign In</div>
          )}
        </button>
      </form>
    </div>
  );
}

export default Login;
