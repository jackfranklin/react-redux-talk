import React from 'react';
import { connect } from 'react-redux';

export class ClearTodos extends React.Component {
  clearTodos() {
    this.props.dispatch({ type: 'CLEAR_TODOS' });
  }

  render() {
    return (
      <button onClick={() => this.clearTodos()}>CLEAR</button>
    );
  }
}

const ConnectedClearTodos = connect()(ClearTodos);

export default ConnectedClearTodos;
