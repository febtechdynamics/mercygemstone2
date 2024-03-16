import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal"; // Import your Modal component
import Products from "./Products"; // Import your Products component
import { MdEdit, MdDelete } from "react-icons/md";
import { Pagination } from "@mui/material";

function ProductList({ handleEdit, handleDelete }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowdEditModal] = useState(false);
  const [productId, setProductId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // State to control the visibility of the modal

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_base_url
        }/api/product/?perPage=5&page=${currentPage}`
      );
      console.log(response.data);
      setProducts(response.data.products);
      setIsLoading(false);
    } catch (error) {
      console.error("Get Products Error:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Fetch products from API or database
    getProducts();
  }, [currentPage]);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const handelEditModal = (_id) => {
    handleEdit(_id);
    setProductId(_id);
    setShowdEditModal(true);
  };

  const closeEditModal = () => {
    setShowdEditModal(false);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < 10) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="product-list">
      <button onClick={openModal}>Add New Product</button>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="title-wraper text-right">Precious Stones</div>
          {/* <div className="row justify-content-center text-center">
            <div className="col-12 ">
              <div className="title-wraper font-weight-bold">
                Precious Stone
              </div>
              <div className="brief-description">
                Beautiful gemstones for every occasion.
              </div>
            </div>
          </div> */}

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
                {products?.length > 0 &&
                  products?.map(
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
                      return (
                        <div className="col-md-4 mt-5 col-sm-12">
                          <div
                            className="card shadow-sm border-0 rounded"
                            style={{ maxHeight: "auto" }}
                          >
                            <div className="card-body p-0">
                              <img
                                src={productImage[0]?.urls}
                                alt=""
                                className="w-100 card-img-top "
                                style={{
                                  maxHeight: "200px",
                                  objectFit: "cover",
                                }}
                              />
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
                                    <span className="ml-1">10 Minutes Ago</span>
                                  </p>
                                </div>
                                <ul className="mb-0 list-inline d-flex justify-content-between">
                                  <li className="list-inline-item m-0">
                                    <div
                                      onClick={() => handelEditModal(_id)}
                                      className="btn bg-warning"
                                    >
                                      <MdEdit />
                                      <span className="ml-1 d-sm-hidden">
                                        Edit
                                      </span>
                                    </div>
                                  </li>
                                  <li className="list-inline-item m-0">
                                    <div
                                      className="btn bg-danger"
                                      onClick={() => handleDelete(_id)}
                                    >
                                      <MdDelete />
                                      <span className="ml-1 d-sm-hidden">
                                        Delete
                                      </span>
                                    </div>
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
              <Pagination
                onClick={(e) => console.log(e)}
                count={4}
                variant="outlined"
              />
              {/* <div className="pagination">
                <button onClick={handlePrevPage}>{"<"}</button>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
                  <button key={page} onClick={() => handlePageChange(page)}>
                    {page}
                  </button>
                ))}
                <button onClick={handleNextPage}>{">"}</button>
              </div> */}
            </>
          )}
        </div>
      </section>
      {showModal && (
        <Modal onClose={closeModal}>
          {/* Render the Products component as a modal */}
          <Products />
        </Modal>
      )}
      {showEditModal && (
        <Modal onClose={closeEditModal}>
          {/* Render the Products component as a modal */}
          <Products id={productId} />
        </Modal>
      )}
    </div>
  );
}

export default ProductList;
