import React from 'react';

const Counter = (props) => {

    let sum = 0;
    props.movies.forEach((movie) => {
        if (movie.favorite) {
            sum ++;
        } return sum
    })

    return (
        <div className="favorite-count">
            <i className="fas fa-lg fa-star"/>
            &nbsp;You like: {sum} from {props.movies.length} movies</div>
    )
}

export default Counter;