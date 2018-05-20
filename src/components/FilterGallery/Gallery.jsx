import React, { Fragment } from 'react';

const Gallery = (props) => {
 return (<Fragment>
            {props.images.map((image) => {
                return (<div key={image.id} id={image.id} categoryid={image.categoryId}>
                <img src={image.img}  />
            </div>)
            })}
        </Fragment>
    )
}

export default Gallery;