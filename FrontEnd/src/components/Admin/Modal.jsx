import React from "react";
import "./Modal.css"; // Import your custom CSS file for styling modal

function Modal({ children, onClose }) {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { handleClose: handleClose });
  });

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn custom-btn " onClick={handleClose}>
          &times;
        </button>
        {childrenWithProps} {/* Render children components within the modal */}
      </div>
    </div>
  );
}

export default Modal;
