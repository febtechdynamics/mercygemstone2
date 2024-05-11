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
    console.log(submittedData);
    let formData = new FormData();
    if (submittedData.productImage?.length > 0) {
      for (let i = 0; i < submittedData.productImage?.length; i++) {
        formData.append("file", submittedData.productImage[i]);
      }
    }
    submittedData.productImage &&
      formData.append("productName", submittedData.productName);
    submittedData.productCategory &&
      formData.append("productCategory", submittedData.productCategory);
    submittedData.productDescription &&
      formData.append("productDescription", submittedData.productDescription);
    submittedData.productPrice &&
      formData.append("productPrice", submittedData.productPrice);

    console.log(formData.get("file"));
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

  const formBtnText = () => {
    if (submitting) {
      if (mode == "add") {
        return "Adding ...";
      } else {
        return "Updating ...";
      }
    } else {
      if (mode == "add") {
        return "Add Product";
      } else {
        return "Update Product";
      }
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="px-3 py-2 z-10">
      <div className="form-group">
        <label htmlFor="productName" className="text-gray-500 text-sm">
          Product Name
        </label>
        <input
          type="text"
          name="productName"
          {...register("productName", { required: "product name is required" })}
          className={` ${
            errors?.productName?.message
              ? " outline outline-1 outline-red-500"
              : ""
          }`}
        />
        {/* {errors?.productName && (
          <small className="text-danger">{errors?.productName?.message}</small>
        )} */}
      </div>

      <div className="form-group">
        <label htmlFor="productCategory" className="text-gray-500 text-sm">
          Product Category
        </label>
        <select
          name="productCategory"
          // value={productCategory}
          // onChange={(e) => setProductCategory(e.target.value)}
          {...register("productCategory", {
            required: "product category is required",
          })}
          // className="form-control"
          className={`form-control ${
            errors?.productName?.message
              ? " outline outline-1 outline-red-500 form-control"
              : ""
          }`}
        >
          <option value="GemStone">GemStone</option>
          <option value="Industrial Materials">Industrial Materials</option>
          <option value="Jewelry">Jewelry</option>
          <option value="Others">Others</option>
        </select>
        {/* {errors?.productCategory && (
          <small className="text-danger">
            {errors?.productCategory?.message}
          </small>
        )} */}
      </div>

      <div className="form-group">
        <label htmlFor="productPrice" className="text-gray-500 text-sm">
          Product Price
        </label>
        <input
          type="number"
          name="productPrice"
          // value={productPrice}
          // onChange={(e) => setProductPrice(e.target.value)}
          {...register("productPrice", {
            required: "product price is required",
          })}
          className={` ${
            errors?.productName?.message
              ? " outline outline-1 outline-red-500"
              : ""
          }`}
        />
        {/* {errors?.productPrice && (
          <small className="text-danger">{errors?.productPrice?.message}</small>
        )} */}
      </div>

      <div className="form-group">
        <label htmlFor="productDescription" className="text-gray-500 text-sm">
          Product Description
        </label>
        <textarea
          name="productDescription"
          rows={3}
          // value={productDescription}
          // onChange={(e) => setProductDescription(e.target.value)}
          {...register("productDescription", {
            required: "product description is required",
          })}
          className={` ${
            errors?.productName?.message
              ? " outline outline-1 outline-red-500"
              : ""
          }`}
        />
        {/* {errors?.productDescription && (
          <small className="text-danger">
            {errors?.productDescription?.message}
          </small>
        )} */}
      </div>

      <div className="form-group">
        <label htmlFor="productImage" className="text-gray-500 text-sm">
          Product Images
        </label>
        <div className="flex">
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
            multiple={true}
            {...register("productImage", {
              required: currentProduct?.productImage
                ? false
                : "product image is required",
            })}
            className={` ${
              errors?.productName?.message
                ? " outline outline-1 outline-red-500"
                : ""
            }`}
          />
        </div>
        {/* {errors?.productImage && (
          <small className="text-danger">{errors?.productImage?.message}</small>
        )} */}
      </div>

      <div className="flex  items-center justify-between">
        <button
          disabled={submitting}
          type="submit"
          className="w-full bg-orange-400 text-white duration-150 ease-in outline-none border-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center"
        >
          {submitting && (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 me-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          )}
          {formBtnText()}
        </button>
        {/* <button
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
        </button> */}
      </div>
    </form>
  );
}

export default Products;
