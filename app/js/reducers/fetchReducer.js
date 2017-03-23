function fetchReducer(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_FETCH':
      return !state
    default:
      return state
  }
}

export default fetchReducer
