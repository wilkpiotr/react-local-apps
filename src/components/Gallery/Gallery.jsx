import React, { Component } from 'react';
import './Gallery.css';
import images from './data';
import GalleryLeft from './GalleryLeft'
import GalleryRight from './GalleryRight';

class Gallery extends Component  {

  state = { 
    images: images,
    index: 0,
    className: 'chosen'
  };

  handleImageClick = (index) => {
    this.setState({index: index})
  }

  render() {

    return (<section className="section Gallery project">
        <h1 className="title">Gallery React App</h1>
        <div className="container">
          <GalleryLeft onImageClick={this.handleImageClick} content={this.state}/>
          <GalleryRight content={this.state}/>
        </div> 
      </section>)
  }
}

export default Gallery;