import { useEffect, useState } from "react";
import DetailsLoader from "./DetailsLoader";
import SingleCarousel from "../SingleCarosel/SingleCarosel";
import { useParams } from "react-router";
import axios from "axios";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch products from API or database
    setIsLoading(true);
    axios
      .get(` ${import.meta.env.VITE_REACT_APP_base_url}/api/product/${id}`)
      .then((response) => {
        // console.log(response.data.product);
        setProduct(response.data.product);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading)
    return (
      <section>
        <DetailsLoader />
      </section>
    );

  return (
    <section>
        <Helmet>
            <title>{product?.productName}</title>
            <meta name="description" content={`${product?.productDescription}`} />
        </Helmet>
      <div className="max-w-screen-xl mx-auto">
        <Breadcrumbs />
      </div>
      <section>
        {product && (
          <div className="bg-gray-100  pt-10 pb-40">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row -mx-4">
                <div className="md:flex-1 px-4">
                  <div className="md:h-[460px] relative rounded-lg bg-gray-300 mb-4">
                    <SingleCarousel
                      height={"460px"}
                      thumb={true}
                      images={product?.productImage}
                    />
                  </div>
                </div>
                <div className="md:flex-1 px-4">
                  <h2 className="text-2xl font-bold text-gray-800  mb-2">
                    {product?.productName}
                  </h2>

                  <div className="flex mb-4">
                    <div className="mr-4">
                      <span className="font-bold text-gray-700">Price:</span>
                      <span className="text-gray-600">
                        {" "}
                        ${product?.productPrice}
                      </span>
                    </div>
                  </div>

                  <div>
                    <span className="font-bold text-gray-700">
                      Product Description:
                    </span>
                    <p className="text-gray-600 text-sm mt-2">
                      {product?.productDescription}
                    </p>
                  </div>

                  <div className="flex -mx-2 mt-10 mb-4">
                    <Link to={"/contact"} className="lg:w-1/2 w-full px-2">
                      <button className="w-full text-sm  bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">
                        Contact Us for This Item
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
};

export default ProductDetail;
