import { combineReducers } from 'redux';

function userReducer(user = {}, action) {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        id: action.id,
        name: action.name
      }
    case 'LOG_USER_OUT':
      return {};

    default:
      return user;
  }
}

function todoReducer(todos = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        name: action.name,
        id: todos.length,
        done: false
      }

      return todos.concat([todo]);

    case 'DELETE_TODO':
      return todos.filter((todo) => todo.id !== action.id);

    case 'TOGGLE_TODO':
      const todos = todos.map((todo) => {
        if (todo.id === action.id) {
          return {
            name: todo.name,
            id: todo.id,
            done: !todo.done
          }
        }

        return todo;
      });

      return todos;

    case 'REQUEST_TODOS_SUCCESS':
      return action.todos;

    case 'CLEAR_TODOS':
      return [];

    default:
      return todos;
  }
}

function isFetchingReducer(isFetching = false, action) {
 switch (action.type) {
   case 'REQUEST_TODOS_INIT':
     return true;

   case 'REQUEST_TODOS_SUCCESS':
     return false;

   default:
     return isFetching;
 }
}


const todoAppReducers = combineReducers({
  todos: todoReducer,
  user: userReducer,
  isFetching: isFetchingReducer
});

export default todoAppReducers;
