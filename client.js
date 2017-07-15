let React = require('react');
let ReactDOM = require('react-dom');
let Redux = require('redux');
let Provider = require('react-redux').Provider;

let routes = require('./routes/routes.jsx');

function reducer(state) {
  return state;
}

let store = Redux.createStore(reducer, window.PROPS);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>, document
);
