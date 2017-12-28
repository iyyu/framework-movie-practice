import React from 'react';
import ReactDOM  from 'react-dom';

var Movie = (props) => (
  <div className="movie">
  {props.movie.title}
  </div>
)


// Movie.propTypes = {
//   movie: React.PropTypes.object.isRequired
// };
export default Movie;
