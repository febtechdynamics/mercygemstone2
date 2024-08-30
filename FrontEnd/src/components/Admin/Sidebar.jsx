import { useNavigate } from "react-router-dom";

function Sidebar({ activeTab, handleTabClick }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div
      className="sidebar"
      style={{
        position: "sticky",
        top: "105px",
        left: "0",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "1rem",
        zIndex: "100",
      }}
    >
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
