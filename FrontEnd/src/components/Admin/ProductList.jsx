import { useEffect, useState } from "react";
import axios from "axios";
import Modal from "./Modal"; // Import your Modal component
import Products from "./Products"; // Import your Products component

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
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5">
              <div className="title-wraper font-weight-bold">
                Precious Stone
              </div>
              <div className="brief-description">
                Beautiful gemstones for every occasion.
              </div>
            </div>
          </div>
          {isLoading ? (
            <div className="w-100">
              <div
                class="spinner-border mx-auto mt-5"
                style={{
                  width: "3rem",
                  height: "3rem",
                }}
                role="status"
              ></div>
            </div>
          ) : (
            <>
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
                    const productDiv = (
                      <div
                        key={_id}
                        className="row justify-content-center text-center product-holder h-100 product"
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
                          <div className="price">{`Price: ${productPrice}`}</div>
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
                        <div>
                          <button onClick={() => handelEditModal(_id)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(_id)}>
                            Delete
                          </button>
                        </div>
                      </div>
                    );
                    return productDiv;
                  }
                )}
              <div className="pagination">
                <button onClick={handlePrevPage}>{"<"}</button>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((page) => (
                  <button key={page} onClick={() => handlePageChange(page)}>
                    {page}
                  </button>
                ))}
                <button onClick={handleNextPage}>{">"}</button>
              </div>
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
