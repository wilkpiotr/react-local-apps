import React, {Component} from 'react';
import './NestedLevel.css';
import data from './data';
import FirstLevel from './FirstLevel';
import SecondLevel from './SecondLevel';
import ThirdLevel from './ThirdLevel';
import Desciption from './Desciption';

class NestedLevel extends Component {

  state = {data, 
    secondLevel: '',
    thirdLevel: '',
    desc: '',
    active: {
      firstLevel: '',
      secondLevel: '',
      thirdLevel: ''
    }};

  handleFirstLevel = (e) => {
    const secondLevelCat = this.state.secondLevel ? 
      (e.target.classList.contains('is-active') ? 
        e.target.classList.toggle('is-active') && '':
        data.find((cat) => {return cat.name === e.target.dataset.name})) :
      data.find((cat) => {return cat.name === e.target.dataset.name});
    this.setState((state) => {
      return {secondLevel: secondLevelCat,
        thirdLevel: '',
        desc: '',
        active: {...this.state.active, firstLevel: secondLevelCat.name}}
    })
  }

  handleSecondLevel = (e) => {
    const thirdLevelCat = this.state.thirdLevel ? 
      (e.target.classList.contains('is-active') ? 
        e.target.classList.toggle('is-active') && '':
        this.state.secondLevel.items.find((cat) => {return cat.name === e.target.dataset.name})) :
      this.state.secondLevel.items.find((cat) => {return cat.name === e.target.dataset.name});
    this.setState((state) => {
      return {thirdLevel: thirdLevelCat,
        desc: '',
        active: {...this.state.active, secondLevel: thirdLevelCat.name}}
    })
  }

  handleThirdLevel = (e) => {
    const itemDesc = this.state.desc ?
      (e.target.classList.contains('is-active') ? 
        e.target.classList.toggle('is-active') && '':
        this.state.thirdLevel.items.find((item) => {return item.name === e.target.dataset.name})) :
      this.state.thirdLevel.items.find((item) => {return item.name === e.target.dataset.name});
    this.setState((state) => {
      return {desc: itemDesc,
        active: {...this.state.active, desc: itemDesc.name}}
    })
  }

  render() {
    return (<section className="section NestedLevel project">
    <div className="container">
      <h1 className="title">Nested Level React App</h1>
      <div className="Menu">
        <FirstLevel onClick={this.handleFirstLevel} categories={this.state.data} active={this.state.active.firstLevel}/>
        <SecondLevel onClick={this.handleSecondLevel} subcategory={this.state.secondLevel} active={this.state.active.secondLevel}/>
        <ThirdLevel onClick={this.handleThirdLevel} lowestSubcat={this.state.thirdLevel} active={this.state.active.thirdLevel}/>
        <Desciption text={this.state.desc}/>
      </div>  
      </div>
    </section>)
  } 
}

export default NestedLevel;