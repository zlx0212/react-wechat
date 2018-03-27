//index.js
const {connect} = require( '../../libs/wechat-weapp-redux.js' )
const {addTodoList, setVisibilityFilter, toggleTodo} = require( '../../actions/index.js' )
const { bindActionCreators } = require('../../libs/redux.js');

const pageConfig = {
  data: {
    todos: [],
    filters: [ { key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }]
  },
  handleCheck: function( e ) {
    const id = parseInt( e.target.id )
    this.toggleTodo( id );
  },
  applyFilter: function( e ) {
    this.setVisibilityFilter( e.target.id )
  }
}

const filterTodos = ( todos, filter ) => {
  switch( filter ) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter( t => t.completed )
    case 'SHOW_ACTIVE':
      return todos.filter( t => !t.completed )
    default:
      throw new Error( 'Unknown filter: ' + filter )
  }
}

const mapStateToData = state => {

  let todos = state.todos;
  let filters = state.filters;  
  console.log('------12')
  console.log(state)
  return {
    todos,
    filters,
  };
}  
// {
//   todos: filterTodos( state.todos, state.visibilityFilter ),
//   visibilityFilter: state.visibilityFilter
// }


const mapDispatchToPage = dispatch => ({
  setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
  toggleTodo: id => dispatch(toggleTodo(id)),
  addTodoList: event => dispatch(addTodoList(event.detail.value.todo)),
})

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig)
Page(nextPageConfig);