import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";

function AddUser({
  handleClose,
  currentUser,
  isEditing,
  editing,
  setSubmitting,
  submitting,
  mode,
}) {
  const [visble, setVisible] = useState(false);
  const [token, setToken] = useState(null);
  // console.log(mode);
  const {
    register,
    handleSubmit,
    watch,
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

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const config = {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //       "Content-Type": "application/json",
  //     },
  //   };

  //   const userData = new FormData();
  //   userData.append("firstName", firstName);
  //   userData.append("lastName", lastName);
  //   userData.append("email", email);
  //   userData.append("phoneNumber", phoneNumber);
  //   userData.append("password", password);
  //   userData.append("role", role);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3000/api/user",
  //       userData,
  //       config
  //     );

  //     console.log(response);
  //     toast.success(response.data.message);
  //   } catch (error) {
  //     console.error(error);
  //     toast.error(error.response?.data?.message || "An error occurred");
  //   }
  // };
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
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto w-50 mt-8"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="firstName"
        >
          First Name:
        </label>
        <input
          type="text"
          name="firstName"
          // value={firstName}
          {...register("firstName", { required: true })}
          // onChange={(e) => setfirstName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors?.firstName && (
          <small className="text-danger">{"First Name is required"}</small>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="lastName"
        >
          Last Name:
        </label>
        <input
          type="text"
          name="lastName"
          // value={lastName}
          {...register("lastName", { required: true })}
          // onChange={(e) => setlastName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors?.lastName && (
          <small className="text-danger">{"Last Name is required"}</small>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email:
        </label>
        <input
          type="email"
          name="email"
          // value={email}
          {...register("email", { required: true })}
          // onChange={(e) => setEmail(e.target.value)}
          className="shadow w-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors?.email && (
          <small className="text-danger">{"Email is required"}</small>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="phoneNumber"
        >
          Phone Number:
        </label>
        <input
          type="tel"
          name="phoneNumber"
          // value={phoneNumber}
          {...register("phoneNumber", { required: true })}
          // onChange={(e) => setphoneNumber(e.target.value)}
          className="shadow w-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        {errors?.phoneNumber && (
          <small className="text-danger">{"Phone Number is required"}</small>
        )}
      </div>
      {/* password */}
      <div class="mb-4 w-100">
        <label>Password</label>
        <div class="d-flex gap-3 w-100">
          <input
            class="w-100"
            name="password"
            className="py-2 px-3 w-100"
            type={visble ? "text" : "password"}
            {...register("password", { required: true })}
          />
          <div
            class="p-2 card"
            onClick={(e) => {
              setVisible(!visble);
            }}
          >
            {visble ? (
              <div>
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
            ) : (
              <div>
                <i class="fa fa-eye-slash" aria-hidden="true"></i>
              </div>
            )}
          </div>
        </div>
        {errors?.password && (
          <small className="text-danger">{"Password is required"}</small>
        )}
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="role"
        >
          Role:
        </label>
        <select
          name="role"
          // value={role}
          // onChange={(e) => {
          //   setRole(e.target.value);
          // }}
          {...register("role", { required: true })}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        {errors?.role && (
          <small className="text-danger">{"Role is required"}</small>
        )}
      </div>

      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="w-50 mt-3 btn btn-color"
          disabled={submitting}
        >
          {submitting ? (
            <div className="w-100 d-flex gap-3 justify-content-center align-items-center">
              <span
                class="mr-3 spinner-border spinner-border-sm"
                role="status"
              ></span>
              {mode == "add" ? <div>Saving ...</div> : <div>Updati ...</div>}
            </div>
          ) : (
            <>{mode == "add" ? <div>Register</div> : <div>Update</div>}</>
          )}
        </button>
      </div>
    </form>
  );
}
export default AddUser;
