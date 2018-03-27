//app.js
const {Provider} = require('./libs/wechat-weapp-redux.js');
const configureStore = require('./configureStore.js');
const indexInitialState = require('./initialState/index');
const {Record, List, Map, fromJS} = require( './libs/immutable.js' );


function getInitialState() {
	const _initState = {
    index: (indexInitialState),
	};
  console.log('----hha')
  console.log(_initState)
	return _initState;
}


App(Provider(configureStore(getInitialState()))({
  onLaunch: function () {
    console.log("onLaunch")
  }
}))