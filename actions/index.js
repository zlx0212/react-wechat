function updateTodoList(list) {
  return {
    type: 'ADD_TODO',
    payload: list
  };
}


export function addTodoList(text) {
  return (dispatch, getState) => {
    let { todos, filters } = getState();
    console.log('------>>>>>>>');
    console.log(todos);
    if(text && text != '') {
      todos.push({
        text: text,
        completed: false
      })
    }
    dispatch(updateTodoList(todos));
  };
}



export function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    payload: filter
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload:id
  };
}


// const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })

// const toggleTodo = (id) => ({
//   type: 'TOGGLE_TODO',
//   id
// })

// module.exports = {
//     addTodo: addTodo,
//     setVisibilityFilter: setVisibilityFilter,
//     toggleTodo: toggleTodo
// }