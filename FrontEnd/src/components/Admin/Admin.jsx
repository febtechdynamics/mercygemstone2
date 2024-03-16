import { useEffect, useState } from "react";
import "./Admin.css"; // Import your custom CSS file
import Sidebar from "./Sidebar";
import axios from "axios";
import { toast } from "react-toastify";
import MainContent from "./MainContent";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [activeTab, setActiveTab] = useState(null);
  const [products, setProducts] = useState([]); // Assuming products are stored in state

  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  // Redirect to login page if users token is not present
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const handleTabClick = (tab) => {
    console.log(`clicked ${tab}`);
    setActiveTab(tab);
  };

  const handleEdit = (id) => {
    console.log(`Edit item with ID: ${id}`);
  };

  const handleDelete = async (productId) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.delete(
        `http://localhost:3000/api/product/${productId}`,
        config
      );

      // Update state to remove the deleted product
      setProducts(products.filter((product) => product.id !== productId));

      toast.success("Product deleted successfully");
    } catch (error) {
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
