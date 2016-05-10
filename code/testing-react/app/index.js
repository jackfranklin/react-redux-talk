import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoAppReducers from './reducers';

import Todos from './todos';

const store = createStore(
  todoAppReducers,
  undefined,
  window.devToolsExtension ? window.devToolsExtension() : undefined
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
