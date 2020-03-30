import React from 'react';
import {PointActionButton} from './components/buttons.js';
import {CheckPoint} from './components/taskPoints.js';
import './style.css';


export class ToDoList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      todoList: [],
      userInput: '',
      helpText: ''
    };
    this.addNewPoint = this.addNewPoint.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.helpText !== '') {
        this.setState({helpText: ''});
    }
  }

  addNewPoint(event) {
    if (this.state.userInput === '') {
      this.setState({helpText: 'Input shouldn\'t be emty'});
      return;
    }
    let updatedToDoList = this.state.todoList;
    updatedToDoList.push(this.state.userInput);
    this.setState({todoList: updatedToDoList, userInput: ''});
  }

  deletePoint(index) {
    let updatedToDoList = this.state.todoList.filter((item, ix) => {return index !== ix});
    this.setState({todoList: updatedToDoList, helpText: 'Point was removed!'});
  }

  handleUserInput(event) {
    this.setState({userInput: event.target.value});
  }

  render() {
    const listItems = this.state.todoList.map((point, num) => {
      let index = num.toString();
      return <CheckPoint point={point} key={index} index={index} onClick={this.deletePoint} />
    }
    );
    return (
      <div class='main-wrapper'>
          <p id="help-text">{this.state.helpText}</p>
          <input type="text" value={this.state.userInput} onChange={this.handleUserInput}/>
          <PointActionButton name="Add point" onClick={this.addNewPoint} />
          <ul>{listItems}</ul>
      </div>
    );
  }
}
