import 'babel-polyfill';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter /* Link, Redirect */ } from 'react-router-dom';
import IssueList from './IssueList.jsx';
import IssueEdit from './IssueEdit.jsx';
import Header, { Home, Footer } from './Common.jsx';
import NotFound from './NotFound.jsx';
import Articles from './Articles.jsx';
import App from './App.jsx';

const Routes = () => (
  <Router>
    <div className="container">
      <Header />
      <hr />
      <Switch>
        {/* <Route exact path="/" component={() => <Redirect to="/home" />}/> */}
        <Route exact path="/home" component={Home} />
        <Route exact path="/issues" component={withRouter(IssueList)} />
        <Route exact path="/issues/:id" component={IssueEdit} />
        <Route path="/articles" component={Articles} />
        <Route path="/*" component={NotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default Routes;
