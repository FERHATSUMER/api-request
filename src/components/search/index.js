import { FaSearch } from 'react-icons/fa';
import './search.css';
import { useState } from 'react';

const Search = ({search}) => {
  const [value,setValue]=useState("ca")

  const handleFromSubmit= (event)=>{
    event.preventDefault ()
    debugger;
      search("ferhat")
  }

 const handleChange = ()=>{
  setValue(e.target.value) 
 }

  return (
    <form className='form-container'>
      <label className='search-title'>What are you looking?</label>
      <div className='search-container'>
        <FaSearch className='search-icon' />
        <input
        value={value}
        onChange={handleChange}
        onSubmit={handleFromSubmit}
        className='search-input' 
        placeholder='write anything' />
      </div>
      <div>{setValue}</div>
    </form>
  );
};

export default Search;
