// GemstoneItems.jsx
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./gemstonItem.css";
import ProductCard from "../ProductCard/ProductCard";

const GemstoneItems = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    // Fetch products from API or database
    axios
      .get(
        "http://localhost:3000/api/product/?category=GemStone&perPage=4&page=1"
      )
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      });
  }, []);

  return (
    <div className="gemstone_container">
      <h1 className="text-4xl pt-3 px-3  ">Gemstones</h1>
      <div className="border-b-4 border-orange-500 inline-block pb-3 w-32 mb-5"></div>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        responsive={responsive}
      >
        {products?.map(
          ({ _id, productName, productCategory, productImage }) => (
            <ProductCard
              key={_id}
              id={_id}
              productImage={productImage}
              productName={productName}
              productCategory={productCategory}
            />

            // <div key={_id} className="single_iteme">
            //   {productImage?.map((images) => {
            //     const productImage = (
            //       <img
            //         className="gemstone_image"
            //         src={images?.urls}
            //         alt={productName}
            //       />
            //     );
            //     return productImage;
            //   })}
            //   <h3>{productName}</h3>
            //   <p>
            //     <Link to={`/product/${_id}`}>
            //       <button>See More</button>
            //     </Link>
            //   </p>
            // </div>
          )
        )}
      </Carousel>
    </div>
  );
};

export default GemstoneItems;
