import { useEffect, useState } from "react";
import axios from "axios";
import "./industrialList.css";

function IndustrialList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from API or database
    axios
      .get(
        "http://localhost:3000/api/product/?category=Industrial Materiales&perPage=10&page=1"
      )
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
      });
  }, []);

  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper font-weight-bold">
                Industrial Materials
              </div>
              <div className="brief-description">
                High-quality materials for various applications.
              </div>
            </div>
          </div>
          {products?.map(
            (
              {
                _id,
                productName,
                productImage,
                productPrice,
                productDescription,
              },
              index
            ) => {
              const productDiv = (
                <div
                  key={_id}
                  className="row justify-content-center text-center product-holder h-100"
                >
                  <div
                    className={`col-sm-12 col-md-6 my-auto order-${
                      index % 2 === 0 ? 1 : 2
                    }`}
                  >
                    <div className="product-title">{productName}</div>
                    <div className="product-description">
                      {productDescription}
                    </div>
                    <div className="price">
                      {productPrice ? `Price: $ ${productPrice}` : ""}
                    </div>
                  </div>

                  <div
                    className={`col-sm-12 col-md-6 order-${
                      index % 2 === 0 ? 2 : 1
                    }`}
                  >
                    <div className="product-image">
                      {productImage?.map((images) => {
                        const productImage = (
                          <img src={images?.urls} alt="product" />
                        );
                        return productImage;
                      })}
                    </div>
                  </div>
                </div>
              );
              return productDiv;
            }
          )}
        </div>
      </section>
    </div>
  );
}

export default IndustrialList;
