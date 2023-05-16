import { FaSearch } from 'react-icons/fa';
import './search.css';

const Search = ({search}) => {

  const handleFromSubmit= (event)=>{
    event.preventDefault ()
    debugger;
      search("ferhat")
  }

  return (
    <form className='form-container'>
      <label className='search-title'>What are you looking?</label>
      <div className='search-container'>
        <FaSearch className='search-icon' />
        <input
        onSubmit={handleFromSubmit}
        className='search-input' 
        placeholder='write anything' />
      </div>
    </form>
  );
};

export default Search;
