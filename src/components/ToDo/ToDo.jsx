import React from 'react';
import './ToDo.css';

const ToDo = () => {

  return (
    <section className="section todo project">
      <div className="columns">
        <div className="column container is-fluid">
          <h1 className="title">ToDo React App &nbsp;  
          <span className="has-text-success">12</span> / 20
          </h1>
          <div className="notification">
            <div>
              <label className="checkbox is-size-3">
                <input className="todo-checkbox" type="checkbox" />
                Buy Milk
              </label>
            </div>

            <div>
              <label className="checkbox is-size-3">
                <input className="todo-checkbox" type="checkbox" />
                Pay Taxes
              </label>
            </div>
          </div>

          <div className="columns">
            <div className="column is-two-thirds">
              <input className="input is-large" placeholder="Your task description" />
            </div>
            <div className="column">  
              <a className="button is-link is-large">Add Task</a>
            </div>
          </div>  

         </div>
      </div>  
    </section>
  )
}

export default ToDo;