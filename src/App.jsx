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
import axios from 'axios';


class App extends Component {

  componentDidMount() {
    axios.get('http://localhost:3000/json/gallery.json')
    .then((result) => {
      console.log(result);
    })
  }

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
