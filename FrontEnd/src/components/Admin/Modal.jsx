import React from "react";
import "./Modal.css"; // Import your custom CSS file for styling modal
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function Modal({ children, onClose }) {
  const handleClose = () => {
    onClose(); // Call the onClose function passed from the parent component
  };

  const childrenWithProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { handleClose: handleClose });
  });

  return (
    <div className="modal-overlay z-[100]">
      <div className="modal-content mt-3 z-[100] lg:w-1/3 md:w-3/4">
        <div className="flex justify-end">
          <IconButton color="error" aria-label="delete" onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </div>

        {childrenWithProps}
      </div>
    </div>
  );
}

export default Modal;
