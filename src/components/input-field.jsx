import React from "react";
import "../styles/InputField.css";

const InputField = props => (
  <div className="search">
    <input
      type="text"
      className="search-term"
      placeholder="Show me the country"
    />
    <button type="submit" className="search-button">
      <i className="fa fa-search"></i>
    </button>
  </div>
);

export default InputField;
