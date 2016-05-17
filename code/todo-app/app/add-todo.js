import React from 'react';
import { connect } from 'react-redux';

export class AddTodo extends React.Component {
  addTodo(e) {
    e.preventDefault();
    const newTodoName = this.refs.todoTitle.value;
    if (newTodoName) {
      this.props.dispatch({
        name: newTodoName,
        type: 'ADD_TODO'
      });

      this.refs.todoTitle.value = '';
    }
  }
  render() {
    return (
      <div className="add-todo">
        <input type="text" placeholder="Walk the dog" ref="todoTitle" />
        <button onClick={(e) => this.addTodo(e) }>
          Add Todo
        </button>
      </div>
    )
  }
}

const ConnectedAddTodo = connect()(AddTodo);

export default ConnectedAddTodo;
