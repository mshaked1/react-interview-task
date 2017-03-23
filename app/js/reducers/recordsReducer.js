function recordsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_RECORDS_DONE':
      return [...action.records]
    case 'ADD_RECORD_DONE':
      return [...state, action.record]
    case 'DELETE_RECORD':
      let newState = [...state]

      newState.splice(action.id, 1)

      return newState
    default:
      return state
  }
}

export default recordsReducer
