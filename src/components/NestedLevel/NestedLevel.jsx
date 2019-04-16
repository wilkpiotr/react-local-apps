import React, {Component} from 'react';
import './NestedLevel.css';
import data from './data';
import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';
import Desciption from './Desciption';

class NestedLevel extends Component {

  state = {data};

  handleClick = (e) => {
    e.target.classList.toggle('is-active')
  }

  render() {
    return (<section className="section NestedLevel project">
    <div className="container">
      <h1 className="title">Nested Level React App</h1>
      <div className="Menu">
        <FirstLevel onClick={this.handleClick} categories={this.state.data}/>
        <SecondLevel/>
        <ThirdLevel/>
        <Desciption/>
      </div>  
      </div>
    </section>)
  } 
}

export default NestedLevel;