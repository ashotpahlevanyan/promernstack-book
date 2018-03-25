import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Switch, Link, withRouter /* Redirect */ } from 'react-router-dom';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import { Home, Header, Footer } from './Common.jsx';
import NotFound from './NotFound.jsx';
import Articles from './Articles.jsx';


const contentNode = document.getElementById('contents');

const RoutedApp = () => (
  <Router>
    <div className="container">
      <Header />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/issues">Issues</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
      </ul>

      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/issues" component={withRouter(IssueList)} />
        <Route exact path="/issues/:id" component={IssueEdit} />
        <Route path="/articles" component={Articles} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(<RoutedApp />, contentNode);

if (module.hot) {
  module.hot.accept();
}
