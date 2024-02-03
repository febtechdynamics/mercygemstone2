// IndustrialDetail.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./productdetail.css";

const IndustrialDetail = () => {
  const { _id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    // Fetch products from API or database
    axios.get(`http://localhost:3000/api/product/${_id}`).then((response) => {
      console.log(response.data.product);
      setProduct(response.data.product);
    });
  }, [_id]);

  if (!product) {
    return <div>Loading...</div>;
  }
  const { productName, productDescription, productPrice, productImage } =
    product;

  return (
    <div className="product_detail">
      <div className="product_detail_left">
        <h3>{productName}</h3>
        <p>Price: $ {productPrice}</p>
        <p>Description: {productDescription}</p>
      </div>
      <div className="product_detail_right">
        {productImage?.map((images) => {
          const productImage = (
            <img key={images._id} src={images?.urls} alt={productName} />
          );
          return productImage;
        })}
      </div>
    </div>
  );
};

export default IndustrialDetail;
