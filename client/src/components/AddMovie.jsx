import React from 'react';
import ReactDOM  from 'react-dom';

var AddMovie = (props) => (
  <div className="add-bar">
    <input className="add-form" type="text" onChange={ (e) => props.handleAddInput(e) } />
    <button className="add-button" onClick={ (e) => props.handleAddSubmit(e) } >Add
    </button>
  </div>
)

export default AddMovie;