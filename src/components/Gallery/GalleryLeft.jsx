import React from 'react';

const GalleryLeft = (props) => {

    return (
        <div className="galleryLeft">
            {props.content.images.map((image, index) => {
                return  <div key={index} onClick={() => props.onImageClick(index)}>
                    {props.content.index === index ? 
                    <img src={image.path} alt='smth' className={props.content.className}/> : 
                    <img src={image.path} alt='smth'/> }
                </div> 
            })} 
        </div>  
    )
}

export default GalleryLeft;