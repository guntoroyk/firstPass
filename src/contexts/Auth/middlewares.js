export const logger = store => next => action => {
  console.log('middleware | dispatching', action)
  next(action)
}

export const myThunk = store => next => action => {
  if (typeof action === 'function') {
    action(store.dispatch)
  } else {
    next(action)
  }
}
