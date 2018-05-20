import React from 'react';
import TaskCounter from './TaskCounter'

const Title = (props) => {

    let sum = 0;
    const done = props.counter.forEach((task) => {
        if (task.done) {
            sum = sum + 1;
        } return sum
    })

    return (
        <h1 className="title">ToDo React App &nbsp;  
            <TaskCounter done={sum} total={props.counter.length}/>
        </h1>
    )
}

export default Title;