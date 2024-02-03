// GemstoneItems.jsx
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "axios";
import { useState, useEffect } from "react";
import "./gemstonItem.css";

const GemstoneItems = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };
  const [products, setProducts] = useState([]);

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
      <h1 className="gemstone_title">Gemstone</h1>
      <Carousel
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        transitionDuration={500}
        responsive={responsive}
      >
        {products?.map(({ _id, productName, productImage }) => (
          <div key={_id} className="single_iteme">
            {productImage?.map((images) => {
              const productImage = (
                <img
                  className="gemstone_image"
                  src={images?.urls}
                  alt={productName}
                />
              );
              return productImage;
            })}
            <h3>{productName}</h3>
            <p>
              <Link to={`/product/${_id}`}>
                <button>See More</button>
              </Link>
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default GemstoneItems;
