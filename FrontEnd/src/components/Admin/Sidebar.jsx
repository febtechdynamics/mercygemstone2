import { useNavigate } from "react-router-dom";

function Sidebar({ activeTab, handleTabClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li
            onClick={() => handleTabClick("users")}
            className={activeTab === "users" ? "active" : ""}
          >
            Users
          </li>
          <li
            onClick={() => handleTabClick("products")}
            className={activeTab === "products" ? "active" : ""}
          >
            Products
          </li>
        </ul>
      </nav>
      <div className="logout">
        <button onClick={handleLogout}>Log Out</button>
      </div>
    </div>
  );
}

export default Sidebar;
