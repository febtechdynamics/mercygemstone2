import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./products.css"; // Import your custom CSS file

function Products() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage, setProductImage] = useState(null);
  const [productCategory, setProductCategory] = useState("GemStone");

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setProductImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const productData = new FormData();
    productData.append("productName", productName);
    productData.append("productPrice", productPrice);
    productData.append("productDescription", productDescription);
    productData.append("file", productImage);
    productData.append("productCategory", productCategory);

    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      };
      if (
        productName === "" ||
        productDescription === "" ||
        productImage === null
      ) {
        toast.error("Please fill out the form");
      } else {
        const response = await axios.post(
          "http://localhost:3000/api/product",
          productData,
          config
        );

        console.log(response.data);
        toast.success(response.data.message);

        // Reset form fields after successful submission
        setProductName("");
        setProductPrice("");
        setProductDescription("");
        setProductCategory("GemStone");
        setProductImage(null); // Reset to null or an empty string
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response.data.message || "An error occurred");
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
        Add Product
      </button>
    </form>
  );
}

export default Products;
