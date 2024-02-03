import React, { useState } from 'react';
import SearchBar from './SearchBar.jsx';
import SearchBarResults from './SearchBarResults';
import CloseIcon from '@mui/icons-material/Close';
import "./searchBar.css"

const Search = ({ toggleSearchVisibility }) => {
  const [results, setResults] = useState([]);

  return (
    <>
    <div className='Search_bar_container'>
        <SearchBar setResults={setResults} />
        <div className='Search_close'>
            <button onClick={toggleSearchVisibility}><CloseIcon /></button>
        </div>
    </div>
    <div>
        <SearchBarResults results={results} />
    </div>
    </>
  );
}

export default Search;
