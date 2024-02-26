import Modal from "./Modal"; // Import your Modal component
import AddUser from "./AddUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function UserList({ handleDelete }) {
  const [users, setUsers] = useState([]);
  const [userId, setUserId] = useState(null);
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal
  useEffect(() => {
    // Fetch products from API or database
    axios
      .get(`http://localhost:3000/api/user?perPage=10&page=1`)
      .then((response) => {
        console.log(response.data);
        setUsers(response.data.users);
        // setTotalPages(response.data.totalPages);
      });
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
      <ol>
        {users.map(({ _id, firstName, lastName, email, phoneNumber, role }) => (
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
        ))}
      </ol>
      {showModal && (
        <Modal onClose={closeModal}>
          <AddUser />
        </Modal>
      )}
    </div>
  );
}

export default UserList;
