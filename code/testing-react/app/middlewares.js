export const logMiddleware = store => next => action => {
  console.log('MIDDLEWARE: About to dispatch', action);

  return next(action);
};
