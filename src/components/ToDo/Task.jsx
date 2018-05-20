import React from 'react';

const Task = (props) => {

    return (
        

        <div>
          <label className="checkbox is-size-3">
            <input onChange={() => props.onClick(props.index)} className="todo-checkbox" checked={props.task.done} type="checkbox" />
            {props.task.title}
          </label>
        </div>
        
    )
}

export default Task;
