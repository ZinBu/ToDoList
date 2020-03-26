import React from 'react';
import ReactDOM from 'react-dom';
import {PointActionButton} from './components/buttons.js';
import {CheckPoint} from './components/taskPoints.js';


class ToDoList extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      todoList: [],
      userInput: ''
    };
    this.addNewPoint = this.addNewPoint.bind(this);
    this.deletePoint = this.deletePoint.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  addNewPoint(event) {
    let updatedToDoList = this.state.todoList;
    updatedToDoList.push(this.state.userInput);
    this.setState({todoList: updatedToDoList});
  }

  deletePoint(event) {
    let updatedToDoList = this.state.todoList;
    updatedToDoList.pop();
    this.setState({todoList: updatedToDoList});
  }

  handleUserInput(event) {
    this.setState({userInput: event.target.value});
  }

  render() {
    const listItems = this.state.todoList.map(
      (point, num) =>
      <CheckPoint point={point} key={num.toString()} onClick={this.deletePoint} />
    );
    return (
      <div>
        <input type="text" value={this.state.userInput} onChange={this.handleUserInput}/>
        <PointActionButton name="Add point" onClick={this.addNewPoint} />
        <ul>{listItems}</ul>
      </div>
    );
  }
}


ReactDOM.render(
  <ToDoList />,
  document.getElementById('root')
);
