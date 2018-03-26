const { createStore, compose, applyMiddleware} = require('./libs/redux.js');
// const devTools = require('./libs/remote-redux-devtools.js').default;
const reducer = require('./reducers/index.js')
import thunk from './libs/redux-thunk';

const createStoreWithMiddleware = applyMiddleware(
	thunk
)(createStore);

function configureStore() {
  return createStoreWithMiddleware(reducer);
}
// function configureStore() {
//   return createStore(reducer, compose(devTools({
//     hostname: 'localhost',
//     port: 5678,
//     secure: false
//   })));
// }

module.exports = configureStore;
