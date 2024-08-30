import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import "./user.css";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PropTypes from "prop-types";

function AddUser({
  handleClose,
  currentUser,
  setSubmitting,
  submitting,
  mode,
}) {
  const [visble, setVisible] = useState(false);
  const [token, setToken] = useState(null);
  const [editPassword, setEditPassword] = useState(false);
  // console.log(mode);
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: currentUser?.firstName || "",
      lastName: currentUser?.lastName || "",
      email: currentUser?.email || "",
      phoneNumber: currentUser?.phoneNumber || "",
      password: "",
      role: currentUser?.role || "",
    },
  });

  console.log(currentUser);
  const onSubmit = async (submittedData) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    try {
      if (mode == "add") {
        setSubmitting(true);
        const response = await axios.post(
          ` ${import.meta.env.VITE_REACT_APP_base_url}/api/user`,
          submittedData,
          config
        );

        console.log(response);
        toast.success(response.data.message);
        setSubmitting(false);
        handleClose();
      }
      if (mode == "edit") {
        setSubmitting(true);
        const response = await axios.patch(
          ` ${import.meta.env.VITE_REACT_APP_base_url}/api/user/${
            currentUser._id
          }`,
          submittedData,
          config
        );

        console.log(response);
        toast.success(response.data.message);
        setSubmitting(false);
        handleClose();
      }
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data?.message || "An error occurred");
      setSubmitting(false);
    }
    console.log(submittedData);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
    console.log(token);
  }, []);

  console.log(errors, "errors");
  const formBtnText = () => {
    if (submitting) {
      if (mode == "add") {
        return "Creating ..";
      } else {
        return "Updating ..";
      }
    } else {
      if (mode == "add") {
        return "Create User";
      } else {
        return "Update User";
      }
    }
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" flex  flex-col gap-3 px-3 py-2 z-[100] overflow-y-scroll hide-scrollbar"
    >
      {/* first name */}
      <div className="">
        <label className="text-gray-500 text-sm" htmlFor="firstName">
          First Name
        </label>
        <input
          type="text"
          name="firstName"
          {...register("firstName", { required: true })}
          className={` ${
            errors?.firstName?.message
              ? " outline outline-1 focus:outline-2 focus:outline-gray-800 outline-red-500 w-100 py-2 px-2 rounded-lg"
              : "w-100 py-2 px-2 focus:outline-2 outline outline-1 outline-gray-300 rounded-lg"
          }`}
        />
      </div>
      {/* last name */}
      <div className="">
        <label className="text-gray-500 text-sm" htmlFor="lastName">
          Last Name
        </label>
        <input
          type="text"
          name="lastName"
          // value={lastName}
          {...register("lastName", { required: true })}
          // onChange={(e) => setlastName(e.target.value)}
          className={` ${
            errors?.lastName?.message
              ? " outline outline-1 focus:outline-2 focus:outline-gray-800 outline-red-500 w-100 py-2 px-2 rounded-lg"
              : "w-100 py-2 px-2 focus:outline-2 outline outline-1 outline-gray-300 rounded-lg"
          }`}
        />
      </div>
      {/* email */}
      <div className="">
        <label className="text-gray-500 text-sm" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          className={` ${
            errors?.email?.message
              ? " outline outline-1 focus:outline-2 focus:outline-gray-800 outline-red-500 w-100 py-2 px-2 rounded-lg"
              : "w-100 py-2 px-2 focus:outline-2 outline outline-1 outline-gray-300 rounded-lg"
          }`}
        />
      </div>
      {/* phone number */}
      <div className="">
        <label className="text-gray-500 text-sm" htmlFor="phoneNumber">
          Phone Number
        </label>
        <input
          type="tel"
          name="phoneNumber"
          {...register("phoneNumber", { required: true })}
          className={` ${
            errors?.phoneNumber?.message
              ? " outline outline-1 focus:outline-2 focus:outline-gray-800 outline-red-500 w-100 py-2 px-2 rounded-lg"
              : "w-100 py-2 px-2 focus:outline-2 outline outline-1 outline-gray-300 rounded-lg"
          }`}
        />
      </div>
      {/* password */}
      {mode == "add" ? (
        <div>
          <label className="text-gray-500 text-sm">Password</label>
          <div className="d-flex gap-3 w-100">
            <input
              name="password"
              // className="py-2 px-3 w-100"
              type={visble ? "text" : "password"}
              {...register("password", { required: true })}
              className={` ${
                errors?.password?.message
                  ? " outline outline-1 focus:outline-2 focus:outline-gray-800 outline-red-500 w-100 py-2 px-2 rounded-lg"
                  : "w-100 py-2 px-2 focus:outline-2 outline outline-1 outline-gray-300 rounded-lg"
              }`}
            />
            <div
              className="p-2 card cursor-pointer"
              onClick={(e) => {
                setVisible(!visble);
              }}
            >
              {visble ? (
                <div>
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </div>
              ) : (
                <div>
                  <i className="fa fa-eye-slash" aria-hidden="true"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : editPassword ? (
        <div>
          <label className="text-gray-500 text-sm">Password</label>
          <div className="d-flex gap-3 w-100">
            <input
              name="password"
              // className="py-2 px-3 w-100"
              type={visble ? "text" : "password"}
              {...register("password", { required: true })}
              className={` ${
                errors?.password?.message
                  ? " outline outline-1 focus:outline-2 focus:outline-gray-800 outline-red-500 w-100 py-2 px-2 rounded-lg"
                  : "w-100 py-2 px-2 focus:outline-2 outline outline-1 outline-gray-300 rounded-lg"
              }`}
            />
            <div
              className="p-2 card cursor-pointer"
              onClick={(e) => {
                setVisible(!visble);
              }}
            >
              {visble ? (
                <div>
                  <i className="fa fa-eye" aria-hidden="true"></i>
                </div>
              ) : (
                <div>
                  <i className="fa fa-eye-slash" aria-hidden="true"></i>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="warning p-1">
          <span>Update Password</span>
          <IconButton onClick={() => setEditPassword(true)} aria-label="delete">
            <EditIcon color="success" />
          </IconButton>
        </div>
      )}
      {}

      {/* role */}
      <div className="">
        <label className="text-gray-500 text-sm" htmlFor="role">
          Role
        </label>
        <select
          name="role"
          {...register("role", { required: true })}
          className={` ${
            errors?.role?.message
              ? " outline outline-1 focus:outline-2 focus:outline-gray-800 outline-red-500 w-100 py-2 px-2 rounded-lg"
              : "w-100 py-2 px-2 focus:outline-2 outline outline-1 outline-gray-300 rounded-lg"
          }`}
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>

      {/* submit btn */}
      <div className="flex mt-3 items-center justify-between">
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
      </div>
    </form>
  );
}

AddUser.propTypes = {
  handleClose: PropTypes.func,
  currentUser: PropTypes.object,
  setSubmitting: PropTypes.func,
  submitting: PropTypes.bool,
  mode: PropTypes.string,
};
export default AddUser;
