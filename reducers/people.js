const people = (state = [], action) => {
  switch (action.type) {
    case 'GET_PEOPLE':
      return [...action.people]
    case 'REMOVE_PEOPLE':
      return state.filter(s => s.name !== action.name)
    default:
      return state
  }
}

export default people