import React from 'react';
import { connect } from 'react-redux';

export class Todo extends React.Component {
  toggleDone() {
    this.props.dispatch({
      type: 'TOGGLE_TODO',
      id: this.props.todo.id
    });
  }

  deleteTodo(e) {
    this.props.dispatch({
      type: 'DELETE_TODO',
      id: this.props.todo.id
    });
  }

  render() {
    const className = this.props.todo.done ? 'done-todo' : '';

    return (
      <div className={`todo ${className} todo-${this.props.todo.id}`}>
        <p className="toggle-todo" onClick={() => this.toggleDone() }>{ this.props.todo.name }</p>
        <a className="delete-todo" href="#" onClick={(e) => this.deleteTodo(e) }>Delete</a>
      </div>
    )
  }
}

const ConnectedTodo = connect()(Todo);

export default ConnectedTodo;
