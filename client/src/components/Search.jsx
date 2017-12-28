import React from 'react';
import ReactDOM from 'react-dom';

var Search = (props) => (
  <div className="search-bar">
    <input className="search-form" type="text" onChange={ (e) => props.handleSearchInput(e) } />
    <button className="search-button" onClick={ (e) => props.handleSearchSubmit(e) } >Search
    </button>
  </div>
)

export default Search;