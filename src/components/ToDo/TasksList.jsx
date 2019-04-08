import React from 'react';
import Task from './Task';

const TasksList = (props) => {

    return (<div className="notification">
     {props.tasks.map((task, index) => {
        return <Task onClick={props.onTaskClick} index={index} key={index} task={task}/>        
    })}
       </div> 
    )
}

export default TasksList;