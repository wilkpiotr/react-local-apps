import React, { Component } from 'react';
import './FilterGallery.css';
import { categories, images } from './data';
import Select from './Select'
import Gallery from './Gallery'

class FilterGallery extends Component {

  state = {images, categories, filteredImages: images}

  handleSelectChange = (e) => {
    const catID = this.state.categories.filter((cat) => { return (cat.name === e.target.value)})[0] ? 
    this.state.categories.filter((cat) => { return (cat.name === e.target.value)})[0].id :
    false;
    let newImages = catID ? this.state.images.filter((img) => { return img.categoryId === catID}) : this.state.images;
    newImages.length ? newImages : newImages = [{id: 0, img:'NO PHOTOS', categoryId: 0}]
    
    this.setState({filteredImages: newImages})
    
  }

  render() {

  return (<section className="section FilterGallery project">
      <h1 className="title">Filter Gallery React App</h1>
      <div className="container header">
        <div className="field">
          <Select onSelectChange={this.handleSelectChange} categories={this.state.categories}/>
        </div>
      </div>
      <div className="container">
          <Gallery images={this.state.filteredImages}/>
      </div> 
    </section>)
    }
}

export default FilterGallery;