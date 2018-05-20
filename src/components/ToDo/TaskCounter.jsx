import React, { Fragment } from 'react';

const TaskCounter = (props) => {
    return (
        <Fragment>
            <span className="has-text-success">{props.done}</span> / {props.total}
        </Fragment>
    )
}

export default TaskCounter;