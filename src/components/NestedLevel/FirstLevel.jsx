import React from 'react';

const FirstLevel = (props) => {
    return <div className="MenuLevel">
    <ul className="menu-list">
        {props.categories.map((cat, index) => {
            if (cat.name === props.active) {return <li key={index}><a className='is-active' onClick={props.onClick} data-name={cat.name}>{cat.name}</a></li>}
            return <li key={index}><a onClick={props.onClick} data-name={cat.name}>{cat.name}</a></li>
            
        })}
    </ul>  
  </div>
}

export default FirstLevel;