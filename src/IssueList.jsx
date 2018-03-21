import React from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import IssueAdd from './IssueAdd.jsx';
import IssueFilter from './IssueFilter.jsx';

class IssueList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      issues: [],
    };

    this.createIssue = this.createIssue.bind(this);
    this.loadData = this.loadData.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.setFilter({});
  }

  setFilter(query) {
    this.props.history.push({pathname: this.props.location.pathname, query});
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const oldQuery = prevProps.location;
    const newQuery = this.props.location;
    console.log(newQuery);
    if(oldQuery.query == newQuery.query) {
      return;
    }

    this.loadData();
  }

  loadData() {
    fetch(`/api/issues${this.props.location.search}`).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          //  console.log('Total Count of records: ', data._metadata.total_count);
          data.records.forEach((issue) => {
            issue.created = new Date(issue.created);
            if (issue.completionDate) {
              issue.completionDate = new Date(issue.completionDate);
            }
          });
          this.setState({ issues: data.records });
        });
      } else {
        response.json().then((error) => {
          alert(`Failed to fetch issue: ${error.message}`);
        });
      }
    }).catch((err) => {
      alert(`Error in fetching data from server + ${err.message}`);
    });
  }

  createIssue(newIssue) {
    fetch('/api/issues/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newIssue),
    }).then((response) => {
      if (response.ok) {
        response.json().then((updatedIssue) => {
          updatedIssue.created = new Date(updatedIssue.created);
          if (updatedIssue.completionDate) {
            updatedIssue.completionDate = new Date(updatedIssue.completionDate);
          }
          const newIssues = this.state.issues.concat(updatedIssue);
          this.setState({ issues: newIssues });
        });
      } else {
        response.json().then((error) => {
          alert(`Failed to add issue: ${error.message}`);
        });
      }
    }).catch((err) => {
      alert(`Error in sending Data to server : ${err.message}`);
    });
  }

  render() {
    return (
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter setFilter={this.setFilter}/>
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </div>
    );
  }
}

const IssueRow = props => (
  <tr>
    <td>
      <Link to={`/issues/${props.issue._id}`}>{props.issue._id.substr(-4)}</Link>
    </td>
    <td>{props.issue.status}</td>
    <td>{props.issue.owner}</td>
    <td>{props.issue.created.toDateString()}</td>
    <td>{props.issue.effort}</td>
    <td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
    <td>{props.issue.title}</td>
  </tr>
);

function IssueTable(props) {
  const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue} />);
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion date</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </table>
  );
}

IssueRow.propTypes = {
  issue: PropTypes.shape({
    owner: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    _id: PropTypes.string,
    status: PropTypes.string,
    created: PropTypes.string,
    effort: PropTypes.number,
    completionDate: PropTypes.string,
  }).isRequired,
};

IssueTable.propTypes = {
  issues: PropTypes.arrayOf({
  }).isRequired,
};

IssueList.propTypes = {
  location: PropTypes.shape({
  }).isRequired,
};

export default IssueList;
