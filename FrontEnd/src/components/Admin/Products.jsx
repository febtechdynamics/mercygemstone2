import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./products.css"; // Import your custom CSS file

function Products({ id }) {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("GemStone");
  const [editedImage, setEditedImage] = useState(null); // State for edited image

  // Fetch product data when component mounts if id prop is provided
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/product/${id}`
        );
        const productData = response.data; // Assuming the response contains product data
        setProductName(productData.productName);
        setProductPrice(productData.productPrice);
        setProductDescription(productData.productDescription);
        setProductCategory(productData.productCategory);
        // You might need to handle product image separately
      } catch (error) {
        console.error(error);
        toast.error(error?.response?.data?.message || "An error occurred");
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setEditedImage(file); // Set edited image when file input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("productName", productName);
    productData.append("productPrice", productPrice);
    productData.append("productDescription", productDescription);
    productData.append("productCategory", productCategory);
    productData.append("file", editedImage || productImage); // Use editedImage if available, otherwise use productImage

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };

      let response;
      if (id) {
        response = await axios.put(
          `http://localhost:3000/api/product/${id}`,
          productData,
          config
        );
        console.log(`edit file ${id} ${response.data}`);
      } else {
        response = await axios.post(
          "http://localhost:3000/api/product",
          productData,
          config
        );
      }

      console.log(response.data);
      toast.success(response.data.message);
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "An error occurred");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-group">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          name="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="productCategory">Product Category:</label>
        <select
          name="productCategory"
          value={productCategory}
          onChange={(e) => setProductCategory(e.target.value)}
          className="form-control"
        >
          <option value="GemStone">GemStone</option>
          <option value="Industrial Materials">Industrial Materials</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Others">Others</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          name="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          name="productDescription"
          value={productDescription}
          onChange={(e) => setProductDescription(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="productImage">Product Image:</label>
        <input
          type="file"
          name="productImage"
          id="file-input"
          accept=".jpg,.jpeg,.png"
          onChange={handleFileInputChange}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        {id ? "Edit Product" : "Add Product"}
      </button>
    </form>
  );
}

export default Products;
