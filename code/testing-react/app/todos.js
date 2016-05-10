import React from 'react';
import Todo from './todo';
import AddTodo from './add-todo';
import { connect } from 'react-redux';


class Todos extends React.Component {
  renderTodos() {
    return this.props.todos.map((todo) => {
      return (
        <li key={todo.id}>
          <Todo todo={todo} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <p>The <em>best</em> todo app out there.</p>
        <h1>Things to get done:</h1>
        <ul className="todos-list">{ this.renderTodos() }</ul>
        <AddTodo />
      </div>
    )
  }
}

const ConnectedTodos = connect((state) => {
  return { todos: state.todos };
})(Todos);

export default ConnectedTodos;
