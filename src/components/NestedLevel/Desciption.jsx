import React from 'react';

const Desciption = (props) => {
    return props.text && <div>
        <h4 className="title is-4">{props.text.name}</h4>
        <p>{props.text.desciption}</p>
    </div>  
}

export default Desciption;