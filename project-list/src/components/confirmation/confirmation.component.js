import "./confirmation.css";
import React, { useEffect } from "react";

const Confirmation = ({ onConfirm, onDismiss }) => {
  function handleConfirm() {
    onConfirm();
    onDismiss();
  }

  // bonus
  useEffect(() => {
    function onKeypress(e) {
      if (e.code === "Escape") {
        onDismiss();
      }
    }
    document.addEventListener("keyup", onKeypress);
    return () => {
      document.removeEventListener("keyup", onKeypress);
    };
  }, []);

  return (
    <div className="modal-bg">
      <div className="modal">
        <div className="modal-header">
          <b>Remove Item</b>
          <button
            className="close-btn"
            aria-label="Close button"
            onClick={onDismiss}
          >
            X
          </button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to remove this item?</p>
        </div>
        <div className="modal-footer">
          <div className="modal-actions">
            <button
              className="remove-btn"
              aria-label="Remove button"
              onClick={handleConfirm}
            >
              Remove
            </button>

            <div className="padding-right-1"></div>

            <button
              className="cancel-btn"
              aria-label="Cancel button"
              onClick={onDismiss}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
