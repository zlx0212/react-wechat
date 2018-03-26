
let InitialState ={
  todos: [{
    text: '预置1',
    completed: false
  }],
  filters: [{ key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }]
};

export default InitialState;
