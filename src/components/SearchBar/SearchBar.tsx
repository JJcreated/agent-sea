import React from 'react';
import './SearchBar.css'

function SearchBar() {
  return (
    <div className='search-bar-container'>
        <input type="search" className='search-bar' placeholder='search agent sea...'/>
    </div>
  )
}

export default SearchBar