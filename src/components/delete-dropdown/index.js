import { useState, useEffect } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";
import "./index.css";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES_WITHOUT_SUB, GET_SUBCATEGORIES } from "../../graphql/queries/productQueries";
import LoadingButton from "../../modules/icons/loading-button";

const CustomDeleteDropdown = ({
  isMain,
  setCategory,
  setSubCategory,
  initialValue,
  label,
  addable,
  setOpenForm,
  deleteLoading,
  onDeleteCategory,
  onDeleteSubCategory,
}) => {
  const [selectedOption, setSelectedOption] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const { data: category, loading } = useQuery(GET_CATEGORIES_WITHOUT_SUB, {
    pollInterval: 500,
  });
  const { data: subcategory } = useQuery(GET_SUBCATEGORIES, {
    pollInterval: 500,
  });
  const categories = category ? category.category : [];
  const subCategories = subcategory ? subcategory.subcategory : [];

  const transformedData = (categories) => {
    return categories.map((category) => ({
      label: category.category_name,
      value: category.id,
    }));
  };

  const transformedSubCategory = (categories) => {
    return categories.map((category) => ({
      label: category.subcategory_name,
      value: category.id,
    }));
  };

  const categoryOptions = transformedData(categories);
  const subCategoryoptions = transformedSubCategory(subCategories);

  const options = isMain ? categoryOptions : subCategoryoptions;

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (isMain) {
      setCategory(option.value);
    } else {
      setSubCategory(option.value);
    }
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    if (isMain) {
      onDeleteCategory(id);
    } else {
      onDeleteSubCategory(id);
    }
  };

  useEffect(() => {
    if (initialValue) {
      setSelectedOption(initialValue);
    }
  }, [initialValue]);

  return (
    <div className="delete-dropdown-container">
      <div className="dropdown-label-container">
        <div style={{paddingBottom:'3px'}}>{label}</div>
        {/* {addable && (
          <button
            type="button"
            onClick={() => setOpenForm(true)}
            className="add-category-btn"
          >
            <FaPlus />
          </button>
        )} */}
      </div>
      <div
        className="custom-dropdowns"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : "Select an option"}
      </div>
      {isOpen && (
        <div className="dropdown-options">
          {options.map((option) => (
            <div
              key={option.value}
              className="dropdown-option"
            >
              <span 
             // onClick={() => handleSelect(option)}
              >{option.label}</span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering the dropdown selection
                  handleDelete(option.value);
                }}
                className="delete-btn"
              >
               {deleteLoading?(<LoadingButton/>):(<FaTrash color="purple"/>)} 
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDeleteDropdown;
