import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal"; // Import your Modal component
import Products from "./Products"; // Import your Products component
import { MdEdit, MdDelete } from "react-icons/md";
import { IconButton, Pagination } from "@mui/material";
import DeleteBtn from "./DeleteBtn";
import EditIcon from "@mui/icons-material/Edit";
import moment from "moment";

function ProductList({ handleEdit, handleDelete }) {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowdEditModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [currentProduct, setCurrentProduct] = useState({}); // State to store the current product to be edited
  const [mode, setMode] = useState(null);

  // State to control the visibility of the modal

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${
          import.meta.env.VITE_REACT_APP_base_url
        }/api/product?perPage=5&page=${currentPage}`
      );
      console.log(response.data);
      setProducts(response.data.products);
      setIsLoading(false);
    } catch (error) {
      console.error("Get Products Error:", error);
      setIsLoading(false);
    }
  };

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    console.log(value);
  };

  useEffect(() => {
    // Fetch products from API or database
    getProducts();
  }, [currentPage, submitting]);

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
    // handleEdit(_id);
    // setProductId(_id);
    // setShowdEditModal(true);
  };

  const closeEditModal = () => {
    setShowdEditModal(false);
  };

  return (
    <div className="product-list">
      <button className="custom-btn" onClick={openModal}>
        Add New Product
      </button>
      <section>
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            {/* filter */}
            <div className="d-flex align-items-center">
              <div className="mr-5">
                <select className="form-control" id="exampleFormControlSelect1">
                  <option>GemStone</option>
                  <option>Industrial Material</option>
                  <option>Jewelry</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="d-flex align-items-center">
                <div className="">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="form-control"
                    id="search"
                    name="search"
                  />
                </div>
                <div className="">
                  <button type="submit" className="btn btn-base btn-color">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-search"
                    >
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* title */}
            <div className="title-wraper h1 text-right">Precious Stones</div>
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
                {products?.length > 0 &&
                  products?.map(
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
                        <div className="col-md-4 mt-5 col-sm-12">
                          <div
                            className="card shadow-sm border-0 rounded"
                            style={{ maxHeight: "auto" }}
                          >
                            <div className="card-body p-0">
                              {productImage && (
                                <img
                                  src={productImage[0]?.urls}
                                  alt=""
                                  className="w-100 card-img-top "
                                  style={{
                                    maxHeight: "200px",
                                    objectFit: "cover",
                                  }}
                                />
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
                                      {/* <MdEdit />
                                      <span className="ml-1 d-sm-hidden">
                                        Edit
                                      </span> */}
                                    </div>
                                  </li>
                                  <li className="list-inline-item m-0">
                                    <DeleteBtn />
                                    {/* <div
                                      className="btn bg-danger"
                                      onClick={() => handleDelete(_id)}
                                    >
                                      <MdDelete />
                                      <span className="ml-1 d-sm-hidden">
                                        Delete
                                      </span>
                                    </div> */}
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
                  count={Math.ceil(products?.length / 5)}
                />
              </div>
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
          <Products
            submitting={submitting}
            setSubmitting={setSubmitting}
            currentProduct={currentProduct}
            closeModal={closeModal}
            mode={mode}
          />
        </Modal>
      )}
      {/* {showEditModal && (
        <Modal onClose={closeEditModal}>
        
          <Products id={productId} />
        </Modal>
      )} */}
    </div>
  );
}

export default ProductList;
