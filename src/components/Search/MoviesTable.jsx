import React from 'react';

const MoviesTable = ({movies}) => {
    if (movies.length < 1) {
        return (<div className="table">
            <p className="no-movies">There is no movie matching search request!</p>
        </div>)
    }
    return(<div className="table">
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Type</th>
                    <th>Rate</th>
                </tr>
            </thead>
            <tbody>
                {movies.map((movie, index) => {
                    return(<tr key={index}>
                        <td>{movie.title}</td>
                        <td>{movie.type}</td>
                        <td>{movie.rate} / 10</td>
                    </tr>)
                })}
            </tbody>
        </table> 
    </div>

    )
}

export default MoviesTable;