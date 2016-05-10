import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import todoAppReducers from './reducers';
import { logMiddleware } from './middlewares';

import Todos from './todos';

const store = createStore(
  todoAppReducers,
  undefined,
  compose(
    applyMiddleware(logMiddleware, thunkMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

class AppComponent extends React.Component {
  render() {
    return <Todos />;
  }
}

render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById('app')
);
