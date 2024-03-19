// IndustrialItems.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./industrialItem.css";

const IndustrialItems = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch products from API or database
    axios
      .get(
        ` ${
          import.meta.env.VITE_REACT_APP_base_url
        }/api/product/?category=Industrial Materiales&perPage=6&page=1`
      )
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      });
  }, []);
  return (
    <div className="industrial_container">
      <h1 className="industrial_title">Industrial Material</h1>
      <div className="industrial_material_container">
        <div className="flex-container">
          {products?.map(({ _id, productName, productImage }) => (
            <Link key={_id} to={`/product/${_id}`} className="industrial_item">
              {productImage?.map((images) => {
                const productImage = (
                  <img
                    className="industrial_material_image"
                    src={images?.urls}
                    alt={productName}
                  />
                );
                return productImage;
              })}

              <div className="industrial_hover">
                <p>View Details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustrialItems;
