const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {completed: !state.completed})
    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('----state 00')
      console.log(state)
    case 'TOGGLE_TODO':
      console.log('----state 11')
    default:
      return state
  }
}

module.exports = todos