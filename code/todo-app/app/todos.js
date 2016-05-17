import React from 'react';
import Todo from './todo';
import AddTodo from './add-todo';
import { connect } from 'react-redux';
import { fetchTodosAction } from './action-creators';


export class Todos extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchTodosAction());
  }

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
        { this.props.isFetching && <p>LOADING...</p> }
        <p>The <em>best</em> todo app out there.</p>
        <h1>Things to get done:</h1>
        <ul className="todos-list">{ this.renderTodos() }</ul>
        <AddTodo />
      </div>
    )
  }
}

const ConnectedTodos = connect((state) => {
  return {
    todos: state.todos,
    isFetching: state.isFetching
  };
})(Todos);

export default ConnectedTodos;
