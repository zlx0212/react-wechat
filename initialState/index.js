const {Record, List, Map, fromJS} = require( '../libs/immutable.js' );

let filterJson = [{ key: 'SHOW_ALL', text: '全部' }, { key: 'SHOW_ACTIVE', text: '正在进行' }, { key: 'SHOW_COMPLETED', text: '已完成' }];
let InitialState = Record({
  todos: "预置1",
  filters: fromJS(filterJson)
  //
});

console.log("---->>>>>")
console.log(InitialState())

export default InitialState();
