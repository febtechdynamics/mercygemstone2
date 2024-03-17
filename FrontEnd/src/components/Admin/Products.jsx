import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "./products.css"; // Import your custom CSS file
import { useForm } from "react-hook-form";

function Products({
  closeModal,
  currentProduct,
  mode,
  setSubmitting,
  submitting,
}) {
  // console.log(currentProduct);
  console.log(mode);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      productName: currentProduct?.productName || "",
      productCategory: currentProduct?.productCategory || "",
      productDescription: currentProduct?.productDescription || "",
      productPrice: currentProduct?.productPrice || "",
      productImage: currentProduct?.productImage || "",
    },
  });

  const token = localStorage.getItem("token");

  const onSubmit = async (submittedData) => {
    let formData = new FormData();
    if (submittedData.productImage?.length > 0) {
      formData.append("file", submittedData.productImage[0]);
    }
    submittedData.productImage &&
      formData.append("productName", submittedData.productName);
    submittedData.productCategory &&
      formData.append("productCategory", submittedData.productCategory);
    submittedData.productDescription &&
      formData.append("productDescription", submittedData.productDescription);
    submittedData.productPrice &&
      formData.append("productPrice", submittedData.productPrice);

    // console.log(formData.get("productName"));
    let config = {
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };
    setSubmitting(true);
    try {
      if (mode == "add") {
        let response = await axios.post(
          `${import.meta.env.VITE_REACT_APP_base_url}/api/product`,
          formData,
          config
        );
        toast.success(response.data.message);
        setSubmitting(false);
        closeModal();
      }
      if (mode == "edit") {
        let response = await axios.patch(
          `${import.meta.env.VITE_REACT_APP_base_url}/api/product/${
            currentProduct?._id
          }`,
          formData,
          config
        );
        toast.success(response.data.message);
        setSubmitting(false);
        closeModal();
      }
    } catch (error) {
      console.error(error);
      toast.error(error?.response?.data?.message || "An error occurred");
      setSubmitting(false);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://localhost:3000/api/product/${id}`
  //       );
  //       const productData = response.data; // Assuming the response contains product data
  //       setProductName(productData.productName);
  //       setProductPrice(productData.productPrice);
  //       setProductDescription(productData.productDescription);
  //       setProductCategory(productData.productCategory);
  //       // You might need to handle product image separately
  //     } catch (error) {
  //       console.error(error);
  //       toast.error(error?.response?.data?.message || "An error occurred");
  //     }
  //   };

  //   if (id) {
  //     fetchData();
  //   }
  // }, []);
  // console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-50 mx-auto p-3">
      <div className="form-group">
        <label htmlFor="productName">Product Name:</label>
        <input
          type="text"
          name="productName"
          // value={productName}
          // onChange={(e) => setProductName(e.target.value)}
          {...register("productName", { required: "product name is required" })}
          className="form-control"
        />
        {errors?.productName && (
          <small className="text-danger">{errors?.productName?.message}</small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="productCategory">Product Category:</label>
        <select
          name="productCategory"
          // value={productCategory}
          // onChange={(e) => setProductCategory(e.target.value)}
          {...register("productCategory", {
            required: "product category is required",
          })}
          className="form-control"
        >
          <option value="GemStone">GemStone</option>
          <option value="Industrial Materials">Industrial Materials</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Others">Others</option>
        </select>
        {errors?.productCategory && (
          <small className="text-danger">
            {errors?.productCategory?.message}
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="productPrice">Product Price:</label>
        <input
          type="number"
          name="productPrice"
          // value={productPrice}
          // onChange={(e) => setProductPrice(e.target.value)}
          {...register("productPrice", {
            required: "product price is required",
          })}
          className="form-control"
        />
        {errors?.productPrice && (
          <small className="text-danger">{errors?.productPrice?.message}</small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="productDescription">Product Description:</label>
        <textarea
          name="productDescription"
          rows={5}
          // value={productDescription}
          // onChange={(e) => setProductDescription(e.target.value)}
          {...register("productDescription", {
            required: "product description is required",
          })}
          className="form-control"
        />
        {errors?.productDescription && (
          <small className="text-danger">
            {errors?.productDescription?.message}
          </small>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="productImage">Product Image:</label>
        <div className="">
          {currentProduct?.productImage && (
            <>
              {currentProduct?.productImage?.map((img) => (
                <img
                  width={30}
                  height={30}
                  src={img?.urls}
                  alt=""
                  className="mr-3"
                />
              ))}
            </>
          )}
          <input
            type="file"
            name="productImage"
            id="file-input"
            accept=".jpg,.jpeg,.png"
            // onChange={handleFileInputChange}
            {...register("productImage", {
              required: currentProduct?.productImage
                ? false
                : "product image is required",
            })}
          />
        </div>
        {errors?.productImage && (
          <small className="text-danger">{errors?.productImage?.message}</small>
        )}
      </div>

      <div className="flex  items-center justify-between">
        <button
          type="submit"
          className="w-50  btn-color btn mt-3"
          disabled={submitting}
        >
          {submitting ? (
            <div className="w-100 d-flex gap-3 justify-content-center align-items-center">
              <span
                class="mr-3 spinner-border spinner-border-sm"
                role="status"
              ></span>
              {mode == "add" ? <div>Adding ...</div> : <div>Updating ...</div>}
            </div>
          ) : (
            <>
              {mode == "add" ? (
                <div>Add Product</div>
              ) : (
                <div>Update Product</div>
              )}
            </>
          )}
        </button>
      </div>
    </form>
  );
}

export default Products;
