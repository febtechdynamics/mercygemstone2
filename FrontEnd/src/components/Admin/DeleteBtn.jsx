import { IconButton } from "@mui/material";
import React from "react";
import Swal from "sweetalert2";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

const DeleteBtn = ({ route, id, setSubmitting, token }) => {
  const deleteHandler = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setSubmitting(true);
        axios
          .delete(`${route}/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((res) => {
            console.log(res.data);
            setSubmitting(false);
            Swal.fire({
              title: "Deleted!",
              text: "The User has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
            setSubmitting(false);
            Swal.fire({
              title: "Error!",
              text: "The User has not been deleted.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <span onClick={() => deleteHandler(id)} className="danger p-1">
      <IconButton aria-label="delete">
        <DeleteIcon color="error" />
      </IconButton>
      {/* <MdDelete color="red" size={20} /> */}
    </span>
  );
};

export default DeleteBtn;
