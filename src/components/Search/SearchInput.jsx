import React from 'react';

const SearchInput = (props) => {
    return(
        <div>
        <input className="input is-medium" placeholder="Search movie by title" onChange={props.onSearchChange} />
      </div>
    )
}

export default SearchInput;