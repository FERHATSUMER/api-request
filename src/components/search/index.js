import { FaSearch } from "react-icons/fa";
import "./search.css";
import { useState } from "react";

const Search = ({ search }) => {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className="form-container" onSubmit={handleFormSubmit}>
      <label className="search-title">What are you looking?</label>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          value={valueInput}
          onChange={handleChange}
          className="search-input"
          placeholder="write anything"
        />
      </div>
      <div>{setValue}</div>
    </form>
  );
};

export default Search;
