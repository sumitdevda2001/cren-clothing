import React from "react";
import Select from "react-select"

const customStyles = {
  option: (provided, state) => ({
    ...provided,

    backgroundColor: state.isSelected ? "#2e2e2fcf" : "#c9c3bd",
    color: state.isSelected ? "w#cfbccb" : "#0f000d",
    textAlign: 'center',
    
   
  
    ":hover": {
      backgroundColor: state.isSelected ? "#d60935" : "#f2f2f2",
      color: state.isSelected ? "white" : "#4a07db",
      textAlign: 'left',
      
  
    },
  }),
  control: (provided, state) => ({
    ...provided,
    minHeight: "30px",
    height: "30px",
    minwidth:"100px",
    backgroundColor: state.isFocused ? "#f2f2f2" : "transparent",
    border: state.isFocused ? "2px solid #d60935" : "2px solid #2e2e2fcf",
    boxShadow: state.isFocused ? "none" : "#d60935",
    borderRadius: "25px",

    ":hover": {
      border: "2px solid #ff4d4d",
      
    },
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "white" : "black",
    
  }),
};

const MySelect = ({ selectedOption, handleChange, options, placeholder }) => {
  return (
    <Select
      value={selectedOption}
      onChange={handleChange}
      options={options}
      styles={customStyles}
      placeholder={placeholder}
    />
  );
};

export default MySelect;