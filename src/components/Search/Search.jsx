import React, { Component } from 'react';
import './Search.css';
import movies from './data';
import MoviesTable from './MoviesTable';
import Button from './Button';
import SearchInput from './SearchInput';

class Search extends Component {

  state = {movies}

  handleChange = (e) => {
    const string = e.target.value;
    const newMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().match(string)
    })
    this.setState((state) => {
      return {movies: newMovies}
    })
  }

  render() {
    return (<section className="section search project">
    <div className="container">
      <h1 className="title">Search React App</h1>
      <SearchInput onSearchChange={this.handleChange}/>
      <Button/>
      <MoviesTable movies={this.state.movies}/>
    </div>
  </section>)
  }
}

export default Search;