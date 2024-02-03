import { useState } from "react";
import "./Admin.css"; // Import your custom CSS file
import Sidebar from "./Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import MainContent from "./MainContent";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [activeTab, setActiveTab] = useState(null);

  const navigate = useNavigate();

  const handleTabClick = (tab) => {
    console.log(`clicked ${tab}`);
    setActiveTab(tab);
  };

  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem("token");

      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.delete(
        `http://localhost:3000/api/product/${productId}`,
        config
      );
      window.location.reload();
      toast.success(response.data.message);
    } catch (error) {
      window.location.reload();
      toast.error(error.response?.data?.message || "An error occurred");
    }
  };

  const handleAddUser = () => {
    navigate("/add-user");
  };

  const handleAddProduct = () => {
    navigate("/add-product");
  };

  return (
    <div className="app">
      <Sidebar activeTab={activeTab} handleTabClick={handleTabClick} />
      <MainContent
        activeTab={activeTab}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleAddUser={handleAddUser}
        handleAddProduct={handleAddProduct}
      />
    </div>
  );
}

export default Admin;
