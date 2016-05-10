const initialTodo = {
  name: 'buy milk',
  id: 0,
  done: false
};

function userReducer(user, action) {
  switch (action.type) {
    case 'LOG_USER_IN':
      return {
        id: action.id,
        name: action.name
      }
    case 'LOG_USER_OUT':
      return undefined;

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

    default:
      return todos;
  }
}

export default function todoAppReducers(state = {}, action) {
  return {
    todos: todoReducer(state.todos, action),
    user: userReducer(state.user, action)
  }
};
