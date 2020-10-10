const people = (state = [], action) => {
  switch (action.type) {
    case 'GET_PEOPLE':
      return [...action.people]
    default:
      return state
  }
}

export default people