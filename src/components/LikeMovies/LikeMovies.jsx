import React from 'react';
import './LikeMovies.css';
import movies from './data';

const LikeMovies = () => {
  return (<section className="section LikeMovies project">
    <div className="container">
      <h1 className="title">Like Movies React App</h1>
      <div className="field">
          <div className="control">
            <div className="select is-medium">
              <select>
                <option>All</option>
                <option>Favorite</option>
              </select>
            </div>
          </div>
      </div>
      <div className="favorite-count"><i className="fas fa-lg fa-star"/> You like: 3 from 5 movies</div>
      <div className="table">
        <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Type</th>
            <th>Rate</th>
            <th>Favorite</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Matrix</td>
            <td>sci-fi</td>
            <td>10 / 10</td>
            <td><span className="icon like-movie"><i className="fas fa-lg fa-star"></i></span></td>
          </tr>  
          <tr>
            <td>Truman Show</td>
            <td>sci-fi</td>
            <td>7 / 10</td>
            <td><span className="icon like-movie"><i className="far fa-lg fa-star"></i></span></td>
          </tr>
          <tr>
            <td>Batman returns</td>
            <td>fantasy</td>
            <td>8 / 10</td>
            <td><span className="icon like-movie"><i className="far fa-lg fa-star"></i></span></td>
          </tr>
          <tr>
            <td>Hangover</td>
            <td>comedy</td>
            <td>8 / 10</td>
            <td><span className="icon like-movie"><i className="fas fa-lg fa-star"></i></span></td>
          </tr>
        </tbody>
        </table> 
      </div>
      </div>
    </section>)
}

export default LikeMovies;