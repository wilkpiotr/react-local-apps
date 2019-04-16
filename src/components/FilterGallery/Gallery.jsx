import React from 'react';

const Gallery = (props) => {
    if (props.images.length < 1) {
        return <div>
            <p>No Pictures</p>
        </div>
    }
    return <div className="container">
        {props.images.map((image) => {
            return (<div key={image.id} id={image.id} categoryid={image.categoryId}>
            <img src={image.img} alt="sth"/>
        </div>)
        })}
    </div>
}

export default Gallery;