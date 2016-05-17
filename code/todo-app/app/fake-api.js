export function fetchTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        todos: [{
          id: 1,
          name: 'Buy Milk',
          done: false
        }]
      })
    }, 1);
  });
}
