import Modal from "./Modal"; // Import your Modal component
import AddUser from "./AddUser";
import { useState } from "react";
import { Link } from "react-router-dom";
function UserList({ handleEdit, handleDelete }) {
  const [showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    // ... more user data
  ];
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
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleEdit(user.id)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ol>
      {showModal && (
        <Modal onClose={closeModal}>
          {/* Render the Products component as a modal */}
          <AddUser />
        </Modal>
      )}
    </div>
  );
}

export default UserList;
