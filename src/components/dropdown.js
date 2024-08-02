import { useEffect, useState } from "react";
import Dropdown from "react-dropdown";
import "../style/dropdown.css";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES_WITHOUT_SUB, GET_SUBCATEGORIES } from "../graphql/queries/productQueries";


const CustomDropdown = ({ isMain, setCategory, setSubCategory, initialValue }) => {
  const [selectedOption, setSelectedOption] = useState();

  const { data:category, loading } = useQuery(GET_CATEGORIES_WITHOUT_SUB);
  const{data:subcategory} = useQuery(GET_SUBCATEGORIES)
  const categories = category ? category.category : [];
  const subCategories = subcategory? subcategory.subcategory : [];

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

  const handleSelect = (option) => {
    setSelectedOption(option);
    if (isMain) {
      setCategory(option.value);
    } else {
      setSubCategory(option.value);
    }
  };

  useEffect(() => {
    if(initialValue){
      setSelectedOption(initialValue)
    }
  },[initialValue])

  return (
    <div className="dropdown-container">
      <p>Select Category</p>
      <Dropdown
        options={isMain?categoryOptions:subCategoryoptions}
        onChange={handleSelect}
        value={selectedOption}
        placeholder="Select an option"
      />
    </div>
  );
};
export default CustomDropdown;
