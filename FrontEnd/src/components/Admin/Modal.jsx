import "./Modal.css"; // Import your custom CSS file for styling modal

function Modal({ children, onClose }) {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        {children} {/* Render children components within the modal */}
      </div>
    </div>
  );
}

export default Modal;
