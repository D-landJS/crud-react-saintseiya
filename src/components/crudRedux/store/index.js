const { createStore } = require('redux');
const { default: reducer } = require('../reducers');

const store = createStore(reducer);

store.subscribe(() => console.log(store));

export default store;
