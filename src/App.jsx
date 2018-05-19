import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import ToDo from './components/ToDo/ToDo';
import Search from './components/Search/Search';
import Gallery from './components/Gallery/Gallery';
import FilterGallery from './components/FilterGallery/FilterGallery';
import NestedLevel from './components/NestedLevel/NestedLevel';
import LikeMovies from './components/LikeMovies/LikeMovies';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <LikeMovies />
        <ToDo />
        <Search />
        <Gallery />
        <FilterGallery />
        <NestedLevel />
      </div>
    );
  }
}

export default App;
