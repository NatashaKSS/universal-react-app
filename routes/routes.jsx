import React from 'react';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from '../views/Layout.jsx';
import About  from '../views/About.jsx';
import Home  from '../views/Home.jsx';

module.exports = (
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} />
      <Route path='about' component={About} />
    </Route>
  </Router>
);
