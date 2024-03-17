import Modal from "./Modal"; // Import your Modal component
import AddUser from "./AddUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";
import { MdEdit, MdDelete } from "react-icons/md";
import { DataGrid } from "@mui/x-data-grid";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Swal from "sweetalert2";
import DeleteBtn from "./DeleteBtn";

function UserList({ handleDelete }) {
  const [users, setUsers] = useState([]);
  const [mode, setMode] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to control the visibility of the modal
  const [submitting, setSubmitting] = useState(false);

  const [currentUser, setCurrentUser] = useState({});

  let token = localStorage.getItem("token");

  const fetchUsers = async () => {
    setIsLoading(true);
    axios
      .get(
        `${import.meta.env.VITE_REACT_APP_base_url}/api/user?perPage=10&page=1`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  const editHandler = (user) => {
    setCurrentUser(user);
    setMode("edit");
    setShowModal(true);
  };

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
          .delete(
            ` ${import.meta.env.VITE_REACT_APP_base_url}/api/user/${id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
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

  const columns = [
    { field: "_id", headerName: "ID" },
    { field: "firstName", headerName: "FirstName" },
    { field: "lastName", headerName: "LastName" },
    { field: "email", headerName: "Email", width: 200 },
    { field: "phoneNumber", headerName: "Phone Number", width: 150 },
    { field: "role", headerName: "User Role" },
    {
      field: "actions",
      headerName: "Actions",
      width: 150,
      renderCell: (params) => {
        // console.log(params);
        return (
          <div className="d-flex gap-5">
            <span
              onClick={() => editHandler(params?.row)}
              className="warning p-1"
            >
              <IconButton aria-label="delete">
                <EditIcon color="success" />
              </IconButton>
              {/* <MdEdit color="green" size={20} /> */}
            </span>
            <DeleteBtn
              route={`${import.meta.env.VITE_REACT_APP_base_url}/api/user`}
              id={params?.row?._id}
              setSubmitting={setSubmitting}
              token={token}
            />
            {/* <span
              onClick={() => deleteHandler(params?.row?._id)}
              className="danger p-1"
            >
              <IconButton aria-label="delete">
                <DeleteIcon color="error" />
              </IconButton>
          
            </span> */}
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    // Fetch users from API or database
    fetchUsers();
  }, [submitting]);

  const openModal = () => {
    setShowModal(true);
    setMode("add");
    setCurrentUser({});
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="user-list">
      <div className="d-flex justify-content-between">
        <button className="custom-btn" onClick={openModal}>
          Add New User
        </button>
        {/* search */}
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

      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(param) => param._id}
          rows={users}
          loading={isLoading}
          sx={{ width: "100%" }}
          pagination={false}
          disableColumnMenu={true}
          disableColumnFilter={true}
          di
          columns={columns}
        />
      </div>

      {showModal && (
        <Modal onClose={closeModal}>
          <AddUser
            submitting={submitting}
            setSubmitting={setSubmitting}
            currentUser={currentUser}
            mode={mode}
          />
        </Modal>
      )}
    </div>
  );
}

export default UserList;
