import React from "react";
import { FaTrash } from "react-icons/fa";

const DropdownOption = ({ label, onDelete, onSelect }) => {
  return (
    <div className="dropdown-option">
      <span onClick={onSelect}>{label}</span>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation(); // Prevent triggering the dropdown selection
          onDelete();
        }}
        className="delete-btn"
      >
        <FaTrash />
      </button>
    </div>
  );
};

export default DropdownOption;