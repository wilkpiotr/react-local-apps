import React from 'react';

const GalleryRight = (props) => {

    return <div className="galleryRight">
    {props.content.images.map((image, index) => {
            return  <div key={index}>
                {props.content.index === index && <img src={image.path} alt='smth'/>}
            </div> 
        })} 
    </div>  

}

export default GalleryRight;