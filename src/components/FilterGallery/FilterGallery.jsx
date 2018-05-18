import React from 'react';
import './FilterGallery.css';
import { categories, images } from './data';

const FilterGallery = () => {
  return (<section className="section FilterGallery project">
      <h1 className="title">Filter Gallery React App</h1>
      <div className="container header">
        <div className="field">
          <div className="control">
            <div className="select is-medium">
              <select>
                <option>All</option>
                <option>Toys</option>
                <option>Cars</option>
                <option>Animals</option>
                <option>Nature</option>
                <option>City</option>
                <option>Coffee</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
          <div>
            <img src="/gallery/1.jpg" alt='smth' />
          </div>  
          <div>
            <img src="/gallery/2.jpg" alt='smth' />
          </div>
          <div>
            <img src="/gallery/3.jpg" alt='smth' />
          </div>  
          <div>
            <img src="/gallery/4.jpg" alt='smth' />
          </div>  
          <div>
            <img src="/gallery/5.jpg" alt='smth' />
          </div>  
          <div className="chosen">
            <img src="/gallery/6.jpg" alt='smth' />
          </div>  
          <div>
            <img src="/gallery/7.jpg" alt='smth' />
          </div> 
          <div>
            <img src="/gallery/8.jpg" alt='smth' />
          </div>  
          <div>
            <img src="/gallery/9.jpg" alt='smth' />
          </div>
          <div>
            <img src="/gallery/10.jpg" alt='smth' />
          </div>   
          <div>
            <img src="/gallery/11.jpg" alt='smth' />
          </div>     
      </div> 
    </section>)
}

export default FilterGallery;