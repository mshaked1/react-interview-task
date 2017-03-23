function toggleSubmitReducer(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_SUBMIT_FORM':
      return !state
    default:
      return state
  }
}

export default toggleSubmitReducer
