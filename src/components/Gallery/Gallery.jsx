import React from 'react';
import './Gallery.css';
import images from './data';

const Gallery = () => {
  return (<section className="section Gallery project">
      <h1 className="title">Gallery React App</h1>
      <div className="container">
        <div className="galleryLeft">
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
        <div className="galleryRight">
          <img src="/gallery/6.jpg" alt='smth' />
        </div>
      </div> 
    </section>)
}

export default Gallery;