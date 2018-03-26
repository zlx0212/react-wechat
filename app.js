//app.js
const {Provider} = require('./libs/wechat-weapp-redux.js');
const configureStore = require('./configureStore.js');
const initialState = require('./initialState/index');

App(Provider(configureStore(initialState))({
  onLaunch: function () {
    console.log("onLaunch")
  }
}))