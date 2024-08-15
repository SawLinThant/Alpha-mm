import { useState, useRef } from "react";
import "./index.css";
import { FaSortDown } from "react-icons/fa";
import { GET_CATEGORIES_WITHOUT_SUB } from "../../graphql/queries/productQueries";
import { useQuery } from "@apollo/client";

const CustomDropdownFilter = ({ setCategory }) => {
  const [filter, setFilter] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  const handleFilter = (value) => {
    setCategory(value);
    setFilter(value);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const { data: category, loading } = useQuery(GET_CATEGORIES_WITHOUT_SUB, {
    pollInterval: 500,
  });
  const categories = category ? category.category : [];
  console.log("filter category:", categories);

  const options = [
    { value: "all", label: "All Category" },
    ...categories.map((category) => ({
      value: category.category_name,
      label: category.category_name
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" "),
    })),
  ];

  return (
    <div
      className="custom-dropdown-container"
      onClick={toggleDropdown}
      ref={selectRef}
    >
      <div className="filter-select">
        <p>
          {options.find((opt) => opt.value === filter)?.label ||
            "Select Category"}
        </p>
        <div>
          <FaSortDown />
        </div>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
              onClick={() => handleFilter(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdownFilter;
