import React, { Component } from 'react';
import './LikeMovies.css';
import movies from './data';
import Table from './Table';
import Select from './Select';
import Counter from './Counter';


class LikeMovies extends Component {

  state = { 
    movies: movies, 
    shownMovies: movies,
    favorites: false, // filter only favorites movies flag
    favsMovies: movies.filter((movie) => {
      return movie.favorite
    })
  };

  handleSelectChange = (e) => {
    const isFavorite =  e.target.value === "favorite" ? true : false;
    const newMovies = isFavorite ? this.state.movies.filter((movie) => {
        return movie.favorite;
    }) : this.state.movies;
    
    this.setState({
      shownMovies: newMovies,
      favorites: e.target.value === "favorite" ? true : false
    });
  }

  handleClickIcon = (e) => {
    const indexMovie = this.state.shownMovies.findIndex((movie)=> {return movie.title === e.currentTarget.dataset.movieTitle})
    const newMovies = [...this.state.shownMovies]
    newMovies[indexMovie].favorite === false ? newMovies[indexMovie].favorite = true : newMovies[indexMovie].favorite = false
    // newMovies.splice(indexMovie, 1)
      this.setState((state) => {
        return {shownMovies: newMovies}
      })
  }
  

  render() {

    return (<section className="section LikeMovies project">
      <div className="container">
        <h1 className="title">Like Movies React App</h1>
        <div className="field">
          <Select onSelectChange={this.handleSelectChange} favorites={this.state.favorites} />
        </div>
        <Counter movies={this.state.shownMovies}/>
        <div className="table">
          <Table onClickIcon={this.handleClickIcon} shownMovies={this.state.shownMovies}/>
        </div>
      </div>
    </section>)
  }
}

export default LikeMovies;