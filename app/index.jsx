'use strict';

import React from 'react';
import { render } from 'react-dom';
import styles from './app.less'
import { Router, Route, Link, browserHistory } from 'react-router';

import * as containers from './container'

import Layout from './components/layout/Layout.jsx'

render(
  <Router history={browserHistory}>
    <Route path="/" component={containers.Home}>
    </Route>
  </Router>,
  document.getElementById('root')
);
