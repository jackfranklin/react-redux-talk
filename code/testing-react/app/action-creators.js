import { fetchTodos } from './fake-api';

export function fetchTodosAction() {
  return (dispatch) => {
    dispatch({ type: 'REQUEST_TODOS_INIT' });

    fetchTodos().then((data) => {
      dispatch({
        type: 'REQUEST_TODOS_SUCCESS',
        todos: data.todos
      });
    });
  }
}
