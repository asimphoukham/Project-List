import "./card.css";
import Tag from "../tag/tag.component";
import Confirmation from "../confirmation/confirmation.component";
import React, { useState } from "react";

const Card = ({ title, description, tags, onRemove }) => {
  const [confirmationVisible, setConfirmationVisible] = useState();

  return (
    <div className="card">
      <div className="card-body">
        <b>Project Name</b>
        <p>{title}</p> {/* curly braces so jsx expression can be inputed */}
        <b>Description</b>
        <p>{description}</p>
        <b>Tags:</b>
        <div className="tag-container">
          {tags.map((tag) => (
            <Tag
            key={tag}
            tagName={tag} />
          ))}
        </div>
      </div>

      <div className="card-footer">
        <button
          className="remove-btn"
          aria-label="Remove button"
          onClick={() => setConfirmationVisible(true)}
        >
          Remove
        </button>
            {confirmationVisible && (
                <Confirmation
                onDismiss={() => setConfirmationVisible(false)}
                onConfirm={onRemove} />
            )}
      </div>
    </div>
  );
};

export default Card;
