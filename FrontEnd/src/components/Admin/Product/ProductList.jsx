import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "../Modal"; // Import your Modal component
import Products from "../Products"; // Import your Products component

import { IconButton, Pagination } from "@mui/material";
import DeleteBtn from "../DeleteBtn";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";
import SingleCarousel from "../../SingleCarosel/SingleCarosel";
import Filter from "../../Products/Filter";
import Search from "../../Products/Search";
import SimpleFooter from "../SimpleFooter";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [options, setOptions] = useState("All");
  const [showOptions, setShowOptions] = useState(false);

  const [currentProduct, setCurrentProduct] = useState({}); // State to store the current product to be edited
  const [mode, setMode] = useState(null);

  // State to control the visibility of the modal

  let token = localStorage.getItem("token");

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_base_url
        }/api/product?perPage=6&page=${currentPage}&search=${search}`
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
  }, [currentPage, submitting, search]);

  const openModal = () => {
    setShowModal(true);
    setMode("add");
    setCurrentProduct({});
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handelEditModal = (data) => {
    setCurrentProduct(data);
    setMode("edit");
    setShowModal(true);
  };

  return (
    <>
      <div className="product-list container">
        <button
          className="px-3 bg-orange-300 py-2 rounded-full"
          onClick={openModal}
        >
          Add New Product
        </button>
        <section>
          <div className="">
            <div className="sticky  top-16 z-10 bg-white">
              <div className="py-2 md:flex flex-row my-5 gap-10 w-full">
                {/* search */}
                <Search
                  isLoading={isLoading}
                  setSearch={setSearch}
                  search={search}
                />
                {/* filter */}
                <Filter
                  setOptions={setOptions}
                  options={options}
                  showOptions={showOptions}
                  setShowOptions={setShowOptions}
                />
              </div>
            </div>

            {isLoading ? (
              <div className="w-100 text-center">
                <div
                  className="spinner-border mx-auto mt-5"
                  style={{
                    width: "3rem",
                    height: "3rem",
                  }}
                  role="status"
                ></div>
              </div>
            ) : (
              <>
                <section className="row">
                  {products?.products?.length > 0 &&
                    products?.products?.map(
                      ({
                        _id,
                        productName,
                        productImage,
                        productPrice,
                        productDescription,
                        productCategory,
                        createdAt,
                      }) => {
                        return (
                          <div key={_id} className="col-md-4 mt-5 col-sm-12">
                            <div
                              className="card shadow-sm border-0 rounded"
                              style={{ height: "470px" }}
                            >
                              <div className="card-body p-0">
                                {productImage && (
                                  <div>
                                    <SingleCarousel images={productImage} />
                                  </div>
                                )}
                                <div className="p-4 d-flex flex-column justify-content-between">
                                  <div>
                                    <h5 className="mb-0">{productName}</h5>
                                    <p
                                      className="small my-2 text-muted overflow-auto"
                                      style={{ height: "80px" }}
                                    >
                                      {productDescription}
                                    </p>
                                    <p className="small  text-muted">
                                      Price : {productPrice}
                                    </p>
                                    <p className="small">
                                      <i className="far fa-clock"></i>
                                      <span className="ml-1">
                                        {moment(createdAt).format("LL")}
                                      </span>
                                    </p>
                                  </div>
                                  <ul className="mb-0 list-inline d-flex justify-content-between">
                                    <li className="list-inline-item m-0">
                                      <div
                                        onClick={() =>
                                          handelEditModal({
                                            _id,
                                            productName,
                                            productImage,
                                            productPrice,
                                            productDescription,
                                            productCategory,
                                          })
                                        }
                                      >
                                        <IconButton aria-label="delete">
                                          <EditIcon color="success" />
                                        </IconButton>
                                      </div>
                                    </li>
                                    <li className="list-inline-item m-0">
                                      <DeleteBtn
                                        setSubmitting={setSubmitting}
                                        token={token}
                                        id={_id}
                                        route={`${
                                          import.meta.env
                                            .VITE_REACT_APP_base_url
                                        }/api/product`}
                                      />
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </section>
                <div className="mt-3 d-flex justify-content-center">
                  <Pagination
                    onChange={handlePageChange}
                    page={currentPage}
                    variant="outlined"
                    shape="rounded"
                    count={Math.ceil(products?.totalItems / 6)}
                  />
                </div>
              </>
            )}
          </div>
        </section>
        {showModal && (
          <Modal onClose={closeModal}>
            {/* Render the Products component as a modal */}
            <Products
              submitting={submitting}
              setSubmitting={setSubmitting}
              currentProduct={currentProduct}
              closeModal={closeModal}
              mode={mode}
            />
          </Modal>
        )}
      </div>
      <SimpleFooter />
    </>
  );
}

export default ProductList;
