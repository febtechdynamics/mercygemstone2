import { useEffect, useState } from "react";
import axios from "axios";
import { IconButton, Pagination } from "@mui/material";
import moment from "moment";
import SingleCarousel from "../SingleCarosel/SingleCarosel";
import Search from "./Search";
import Filter from "./Filter";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import SkeletonCard from "../SkeletonCard/SkeletonCard";
import { useDebounce as useDebounceHook } from "use-debounce";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

function ProductList({ handleEdit, handleDelete }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState("All");
  const [showOptions, setShowOptions] = useState(false);

  console.log(options);
  // debounce
  const [debouncedSearch] = useDebounceHook(search, 500);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_base_url
        }/api/product?perPage=6&page=${currentPage}&search=${debouncedSearch}&category=${options}`
      );
      setProducts(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error("Get Products Error:", error);
      setIsLoading(false);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    // Fetch products from API or database
    getProducts();
  }, [currentPage, debouncedSearch, options]);

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="sticky  top-0 z-10 bg-white">
        <Breadcrumbs />
        <div className="py-2 md:flex flex-row my-5 gap-10 w-full">
          {/* search */}
          <Search isLoading={isLoading} setSearch={setSearch} search={search} />
          {/* filter */}
          <Filter
            setOptions={setOptions}
            options={options}
            showOptions={showOptions}
            setShowOptions={setShowOptions}
          />
        </div>
      </div>
      <div className="product-list">
        <section>
          <div className=" ">
            {/* loader */}
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-5">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </div>
            ) : (
              <>
                {/* product lists */}
                <section className="grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                  {products?.products?.length > 0 &&
                    products?.products?.map(
                      (
                        {
                          _id,
                          productName,
                          productImage,
                          productPrice,
                          productDescription,
                          productCategory,
                          createdAt,
                        },
                        index
                      ) => {
                        return (
                          <div className="">
                            <div
                              className="card shadow-sm border-0 rounded"
                              style={{ height: "360px" }}
                            >
                              <div className="card-body p-0">
                                {productImage && (
                                  <div>
                                    <SingleCarousel images={productImage} />
                                  </div>
                                )}
                                <div className="p-4 d-flex flex-column justify-content-between">
                                  <div>
                                    <Link
                                      className="mb-0"
                                      to={`/products/${_id}`}
                                    >
                                      {productName}
                                    </Link>
                                    <p
                                      className="small my-2 text-muted overflow-auto"
                                      style={{ height: "60px" }}
                                    >
                                      {productDescription}
                                    </p>
                                    <div className="flex justify-between">
                                      <p className="text-md text-muted">
                                        Price : $ {productPrice}
                                      </p>
                                      <span className="flex gap-2 bg-gradient-to-r from-orange-400 to-green-500 px-2 py-1 rounded-full">
                                        <Link
                                          className=" text-white text-sm"
                                          to={`/products/${_id}`}
                                        >
                                          See Details
                                        </Link>
                                        <FaArrowRight color="#fff" />
                                      </span>
                                    </div>
                                    {/* <p className="small">
                                    <i className="far fa-clock"></i>
                                    <span className="ml-1">
                                      {moment(createdAt).format("LL")}
                                    </span>
                                  </p> */}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                  {products?.products?.length === 0 && (
                    <div className="text-gray-500 w-full">
                      <h3>Opps! No Products Found with your Query.</h3>
                    </div>
                  )}
                </section>
                <div className="my-3 d-flex justify-content-center">
                  {
                    // Pagination
                    products?.products?.length > 0 && (
                      <Pagination
                        onChange={handlePageChange}
                        page={currentPage}
                        variant="outlined"
                        shape="rounded"
                        count={Math.ceil(products?.totalItems / 6)}
                      />
                    )
                  }
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </section>
  );
}

export default ProductList;
