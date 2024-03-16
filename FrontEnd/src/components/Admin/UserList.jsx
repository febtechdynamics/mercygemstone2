import Modal from "./Modal"; // Import your Modal component
import AddUser from "./AddUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { set } from "mongoose";
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
      <div>
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
          <ol>
            {users.map(
              ({ _id, firstName, lastName, email, phoneNumber, role }) => (
                <li key={_id}>
                  <h2
                    style={{ marginBottom: "10px", color: "navy" }}
                  >{`Name: ${firstName} ${lastName}`}</h2>
                  <h2
                    style={{ marginBottom: "10px", color: "darkgreen" }}
                  >{`Email: ${email}`}</h2>
                  <h2
                    style={{ marginBottom: "10px", color: "maroon" }}
                  >{`Phone Number: ${phoneNumber}`}</h2>
                  <h2
                    style={{ marginBottom: "10px", color: "indigo" }}
                  >{`Role: ${role}`}</h2>

                  {/* <button onClick={() => handleEdit(_id)}>Edit</button> */}
                  {/* <button onClick={() => handleDelete(_id)}>Delete</button> */}
                </li>
              )
            )}
          </ol>
        )}
      </div>

      {showModal && (
        <Modal onClose={closeModal}>
          <AddUser />
        </Modal>
      )}
    </div>
  );
}

export default UserList;
