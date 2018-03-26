import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
// import '../static/bootstrap/css/bootstrap.min.css';
// //import '@fortawesome/fontawesome/styles.css';
import { BrowserRouter as Router, Route, Switch, withRouter /* Link, Redirect */ } from 'react-router-dom';
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
