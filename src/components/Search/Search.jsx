import React from 'react';
import './Search.css';
import movies from './data';

const Search = () => {
  return (<section className="section search project">
    <div className="container">
      <h1 className="title">Search React App</h1>
      <div>
        <input className="input is-medium" placeholder="Search movie by title" />
      </div>
      <div>  
        <a className="button is-medium">Search</a>
      </div> 
      <div className="table">
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matrix</td>
            <td>sci-fi</td>
            <td>10 / 10</td>
          </tr>  
          <tr>
            <td>Truman Show</td>
            <td>sci-fi</td>
            <td>7 / 10</td>
          </tr>
          <tr>
            <td>Batman returns</td>
            <td>fantasy</td>
            <td>8 / 10</td>
          </tr>
          <tr>
            <td>Hangover</td>
            <td>comedy</td>
            <td>8 / 10</td>
          </tr>
        </tbody>
        </table> 
      </div>
      </div>
    </section>)
}

export default Search;