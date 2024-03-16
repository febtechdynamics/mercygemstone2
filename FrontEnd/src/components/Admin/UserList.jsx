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
} from "@mui/material";

function UserList({ handleDelete }) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // State to control the visibility of the modal

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

  const columns = [
    { field: "_id", headerName: "ID" },
    { field: "firstName", headerName: "FirstName" },
    { field: "lastName", headerName: "LastName" },
    { field: "email", headerName: "Email" },
    { field: "phoneNumber", headerName: "Phone Number" },
    { field: "role", headerName: "User Role" },
    {
      field: "actions",
      headerName: "User Role",
      renderCell: (params) => {
        return (
          <div className="d-flex gap-4">
            <span className="warning p-1">
              <MdEdit color="green" size={20} />
            </span>
            <span className="danger p-1">
              <MdDelete color="red" size={20} />
            </span>
          </div>
        );
      },
    },
  ];

  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  useEffect(() => {
    // Fetch users from API or database
    fetchUsers();
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="user-list">
      <button onClick={openModal}>Add New User</button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>FirstName</TableCell>
              <TableCell>LastName</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <div
                class="spinner-border mx-auto mt-5"
                style={{
                  width: "3rem",
                  height: "3rem",
                }}
                role="status"
              ></div>
            ) : (
              users.map(
                ({ _id, firstName, lastName, email, phoneNumber, role }) => (
                  <TableRow key={_id}>
                    <TableCell>{firstName}</TableCell>
                    <TableCell>{lastName}</TableCell>
                    <TableCell>{email}</TableCell>
                    <TableCell>{phoneNumber}</TableCell>
                    <TableCell>{role}</TableCell>
                    <TableCell>
                      {
                        <div className="d-flex gap-4">
                          <span className="warning p-1">
                            <MdEdit color="green" size={20} />
                          </span>

                          <span className="danger p-1">
                            <MdDelete color="red" size={20} />
                          </span>
                        </div>
                      }
                    </TableCell>
                  </TableRow>
                  // <tr key={_id}>
                  //   <td className="text-wrap">{firstName}</td>
                  //   <td className="text-wrap">{lastName}</td>
                  //   <td className="text-wrap">{email}</td>
                  //   <td className="text-wrap">{phoneNumber}</td>
                  //   <td className="text-wrap">{role}</td>
                  //   <td>
                  //     <div className="d-flex gap-4">
                  //       <span className="warning p-1">
                  //         <MdEdit color="green" size={20} />
                  //       </span>
                  //       <span className="danger p-1">
                  //         <MdDelete color="red" size={20} />
                  //       </span>
                  //     </div>
                  //   </td>
                  // </tr>
                )
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {/* <div style={{ height: 300, width: "100%" }}>
        <DataGrid
          getRowId={(param) => param._id}
          rows={users}
          loading={isLoading}
          pagination={false}
          disableColumnMenu={true}
          disableColumnFilter={true}
          di
          columns={columns}
        />
      </div> */}
      {/* <div className="table-responsive-sm">
        <table class="table table-hover table-sm">
          <thead class="thead-light">
            <tr>
              <th className="text-wrap" scope="col">
                First Name
              </th>
              <th className="text-wrap" scope="col">
                Last Name
              </th>
              <th className="text-wrap" scope="col">
                Email
              </th>
              <th className="text-wrap" scope="col">
                Phone Number
              </th>
              <th className="text-wrap" scope="col">
                User Role
              </th>
              <th className="text-wrap" scope="col">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <div
                class="spinner-border mx-auto mt-5"
                style={{
                  width: "3rem",
                  height: "3rem",
                }}
                role="status"
              ></div>
            ) : (
              users.map(
                ({ _id, firstName, lastName, email, phoneNumber, role }) => (
                  <tr key={_id}>
                    <td className="text-wrap">{firstName}</td>
                    <td className="text-wrap">{lastName}</td>
                    <td className="text-wrap">{email}</td>
                    <td className="text-wrap">{phoneNumber}</td>
                    <td className="text-wrap">{role}</td>
                    <td>
                      <div className="d-flex gap-4">
                        <span className="warning p-1">
                          <MdEdit color="green" size={20} />
                        </span>
                        <span className="danger p-1">
                          <MdDelete color="red" size={20} />
                        </span>
                      </div>
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </table>
      </div> */}
      {/*  */}

      {showModal && (
        <Modal onClose={closeModal}>
          <AddUser />
        </Modal>
      )}
    </div>
  );
}

export default UserList;
