export function fetchTodos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        todos: [{
          id: 0,
          name: 'Buy Milk',
          done: false
        }]
      })
    }, 2000);
  });
}
