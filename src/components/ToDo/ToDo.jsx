import React, { Component } from 'react';
import './ToDo.css';
import Title from './Title';
import TasksList from './TasksList';
import AddTask from './AddTask';
// import {PropTypse} from 'prop'

class  ToDo extends Component {


  state = { tasks: [
    {title: 'Buy Milk',done: true},  
    {title: 'Pay Taxes', done: false}],
    input: null}

 

  handleTaskClick = (index) => { 
    const newTasks = [...this.state.tasks]
    if (newTasks[index].done) {
      newTasks[index].done = false;
    } else {newTasks[index].done = true};
  
    this.setState({tasks: newTasks})  
  }
  
  handleAddTask = (e) => {
    if (this.input.value !== '') {
      const newTasks = [...this.state.tasks]
      const newTask = {title: this.input.value, done: false}
      newTasks.push(newTask);
      this.input.value = '';
      this.input.placeholder = 'Your task description';
      this.setState({tasks: newTasks})
    } else {this.input.placeholder = 'You need add task'}
  }

  render() {

   
    return (
      <section className="section todo project">
        <div className="columns">
          <div className="column container is-fluid">
            <Title counter={this.state.tasks}/>
            <TasksList onTaskClick={this.handleTaskClick} tasks={this.state.tasks}/>
            <AddTask rel={el => {this.input = el}} onAddTaskClick={this.handleAddTask}/>
          </div>
        </div>  
      </section>
    )
  }
}

export default ToDo;