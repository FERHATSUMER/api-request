import { FaSearch } from "react-icons/fa";
import "./search.css";
import { useState } from "react";

const Search = ({ search }) => {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="form-container">
      <label className="search-title">What are you looking?</label>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          value={valueInput}
          onChange={handleChange}
          onSubmit={handleFormSubmit}
          className="search-input"
          placeholder="write anything"
        />
      </div>
      <div>{setValue}</div>
    </form>
  );
};

export default Search;
