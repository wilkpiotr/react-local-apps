import React from 'react';

const FirstLevel = (props) => {
    return <div className="MenuLevel">
    <ul className="menu-list">
        {props.categories.map((cat, index) => {
            return <li key={index}><a onClick={props.onClick}>{cat.name}</a></li>
            // <li><a className="is-active" >Movies</a></li>
            // <li><a>Players</a></li>
        })}
    </ul>  
  </div>
}

export default FirstLevel;