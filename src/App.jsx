//  'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import { Switch } from 'react-router-dom';

import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';

const contentNode = document.getElementById('contents');
const NoMatch = () => <p>Page Not Fount</p>;

const RoutedApp = () => (
  <Router>
    <Switch>
      <Redirect exact from="/" to="/issues" />
      <Route exact={true} path={"/issues/"} component={IssueList} />
      <Route exact={true} path={"/issues/:id"} component={IssueEdit} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </Router>
);


ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
