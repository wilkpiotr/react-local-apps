import React from 'react';

const AddTask = (props) => {

    return (
        <div className="columns">
              <div className="column is-two-thirds">
                <input ref={props.rel} className="input is-large" placeholder="Your task description" />
              </div>
              <div className="column">  
                <a onClick={props.onAddTaskClick} className="button is-link is-large">Add Task</a>
              </div>
            </div>  
    )
}

export default AddTask;