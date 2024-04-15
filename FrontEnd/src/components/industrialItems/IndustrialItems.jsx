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
        }/api/product/?category=Industrial Materials&perPage=3&page=1`
      )
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      });
  }, []);
  return (
    <div className="industrial_container py-5">
      <h1 className="text-4xl pt-3 px-3  ">Industrial Materials</h1>
      <div className="border-b-4 border-orange-500 inline-block pb-7 mb-4 w-48"></div>

      <div className="industrial_material_container mt-5">
        <div className="flex-container">
          {products?.slice(0, 6)?.map(({ _id, productName, productImage }) => (
            <Link key={_id} to={`/product/${_id}`} className="industrial_item">
              {productImage?.map((images) => {
                const productImage = (
                  <img
                    className="industrial_material_image rounded-xl"
                    src={images?.urls}
                    alt={productName}
                  />
                );
                return productImage;
              })}

              <div className="industrial_hover px-4 rounded-full">
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
