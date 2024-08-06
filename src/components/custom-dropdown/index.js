import { useState, useRef } from "react";
import "./index.css";
import { FaSortDown } from "react-icons/fa";

const CustomDropdownFilter = ({ setCategory }) => {
  const [filter, setFilter] = useState('');
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

  const options = [
    { value: 'all', label: 'All Category' },
    { value: 'kitchen', label: 'Kitchen' },
    { value: 'laundry', label: 'Laundry' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'miscellaneous', label: 'Miscellaneous' }
  ];

  return (
    <div className="custom-dropdown-container" onClick={toggleDropdown} ref={selectRef}>
      <div className="filter-select">
        <p>{options.find(opt => opt.value === filter)?.label || 'Select Category'}</p>
        <div><FaSortDown /></div></div>
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

