import React from 'react';

const Select = (props) => {

return ( 
<div className="control">
    <div className="select is-medium">
        <select onChange={props.onSelectChange}> 
            <option>All</option>
            {props.categories.map((cat) => {
                return <option key={cat.id} id={cat.id} value={cat.name}>{cat.name}</option>
            })}

        </select>
    </div>
</div>)
}

export default Select