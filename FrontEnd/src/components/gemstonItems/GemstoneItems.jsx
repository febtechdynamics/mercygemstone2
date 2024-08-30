// GemstoneItems.jsx
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./gemstonItem.css";
import ProductCard from "../ProductCard/ProductCard";
import SkeletonCard from "../SkeletonCard/SkeletonCard";

const GemstoneItems = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(products);

  useEffect(() => {
    // Fetch products from API or database
    setIsLoading(true);
    axios
      .get(
        ` ${
          import.meta.env.VITE_REACT_APP_base_url
        }/api/product/?category=GemStone&perPage=3&page=1`
      )
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
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
        {isLoading && <SkeletonCard />}
        {isLoading && <SkeletonCard />}
        {isLoading && <SkeletonCard />}

        {products?.map(
          ({ _id, productName, productCategory, productImage }) => (
            <ProductCard
              key={_id}
              id={_id}
              productImage={productImage}
              productName={productName}
              productCategory={productCategory}
            />
          )
        )}
      </Carousel>
    </div>
  );
};

export default GemstoneItems;
