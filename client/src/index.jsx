import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

var movieData = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
  {title: 'Iris and the Movie List'}
];

// var AddMovie = require('./components/AddMovie.jsx');
// var MovieDetails = require('./components/MovieDetails.jsx');
// var Search = require('./components/Search.jsx');

class MovieList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: props.movies,
      moviesDisplay: props.movies,
      searchValue: '',
      addTitleValue: ''
    }

  this.handleSearchInput = this.handleSearchInput.bind(this);
  this.handleSearchSubmit = this.handleSearchSubmit.bind(this);

  this.handleAddInput = this.handleAddInput.bind(this);
  this.handleAddSubmit = this.handleAddSubmit.bind(this);

  }

  handleAddInput (event) {
    this.setState({addTitleValue: event.target.value}); // should get the value of the search input
    console.log(this.state.addTitleValue);
    event.target.reset();
  }

  handleAddSubmit (event) {
    console.log('hello');
    if (this.state.addTitleValue !== '') {
      // build movie object with title
      var movieToAdd = {title: this.state.addTitleValue};
      // add to movies
      var added = this.state.movies.push(movieToAdd);
      this.setState({movies: added});
      this.setState({addTitleValue: ''});
      console.log(this.state.movies);
    }
  }

  handleSearchInput (event) {
    this.setState({searchValue: event.target.value}); // should get the value of the search input
  }

  handleSearchSubmit (event) {
    // some filter function that sets state for movies if movie title matches
    if (this.state.searchValue !== '') {
      var filtered = this.state.moviesDisplay.filter((movie) => {
        var formatted = movie.title.toLowerCase();
        return formatted.includes(this.state.searchValue.toLowerCase());
      });
      this.setState({moviesDisplay: filtered});
    }
    if (this.state.searchValue === '') {
      // re-renders props.movies
      this.setState({moviesDisplay: this.state.movies});
    }
  }

  render() {
    return (
      <div>

        <AddMovie handleAddInput={this.handleAddInput} 
        handleAddSubmit={this.handleAddSubmit} />

        <Search handleSearchInput={this.handleSearchInput} 
        handleSearchSubmit={this.handleSearchSubmit} />
      
        <div className="movie-list">
          {this.state.moviesDisplay.map((movie) => 
          <Movie movie={movie} key={movie.title}/>
          )}
        </div>

      </div>

    );
  }
}

// MovieList.propTypes = {
//   movies: React.PropTypes.array.isRequired
// };


ReactDOM.render( <MovieList movies={movieData}/>, document.getElementById('app'));
      