import React from 'react';
import { connect } from 'react-redux';

class ClearTodosButton extends React.Component {

  dispatchClear() {
    this.props.dispatch({ type: 'CLEAR_TODOS' });
  }

  render() {
    return (
      <button onClick={() => this.dispatchClear()}>Clear</button>
    );
  }
}

const ConnectedClearTodosButton = connect()(ClearTodosButton);

export default ConnectedClearTodosButton;

