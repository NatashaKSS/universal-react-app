let router = require('express').Router();
let React = require('react');
let ReactDOMServer = require('react-dom/server');
let ReactRouter = require('react-router');
let Redux = require('redux');
let Provider = require('react-redux').Provider;

let routes = require('./routes.jsx');

function reducer(state) {
  return state;
}

router.get('*', function(request, response) {
  let initialState = { title: 'My Basic Universal React App' };
  let store = Redux.createStore(reducer, initialState);

  ReactRouter.match({
    routes: (
      routes
    ),
    location: request.url
  }, function(error, redirectLocation, renderProps) {
    if (renderProps) {
      let html = ReactDOMServer.renderToString(
        <Provider store={store}>
          <ReactRouter.RouterContext {...renderProps} />
        </Provider>
      );
      response.send(html);
    } else {
      response.status(404).send('404 Not Found');
    }
  });
});

module.exports = router;