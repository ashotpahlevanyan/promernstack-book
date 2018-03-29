import React from 'react';
import 'whatwg-fetch';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Table, Panel } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faTrashAlt from '@fortawesome/fontawesome-free-solid/faTrashAlt.js';

import IssueAdd from './IssueAdd.jsx';
import IssueFilter from './IssueFilter.jsx';
import Toast from './Toast.jsx';

class IssueList extends React.Component {
  static constructQuery(query) {
    const stat = query.status ? `status=${query.status}` : '';
    const effortGte = query.effort_gte ? `&effort_gte=${query.effort_gte}` : '';
    const effortLte = query.effort_lte ? `&effort_lte=${query.effort_lte}` : '';
    const searchQuery = `${stat}${effortGte}${effortLte}`;
    return searchQuery;
  }

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      query: {
        status: '',
        effort_gte: '',
        effort_lte: '',
      },
      toastVisible: false,
      toastMessage: '',
      toastType: 'success',
    };
    this.createIssue = this.createIssue.bind(this);
    this.loadData = this.loadData.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.deleteIssue = this.deleteIssue.bind(this);
    this.showError = this.showError.bind(this);
    this.dismissToast = this.dismissToast.bind(this);

    this.setFilter(this.state.query);
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    const oldQuery = prevProps.location;
    const newQuery = this.props.location;

    if (oldQuery.search === newQuery.search) {
      return;
    }

    this.loadData();
  }

  setFilter(query) {
    this.setState({
      query,
    });

    this.props.history.push({
      pathname: this.props.location.pathname,
      search: IssueList.constructQuery(query),
      query,
    });
  }

  showError(message) {
    this.setState({ toastVisible: true, toastMessage: message, toastType: 'danger' });
  }

  dismissToast() {
    this.setState({ toastVisible: false });
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
          this.showError(`Failed to fetch issue: ${error.message}`);
        });
      }
    }).catch((err) => {
      this.showError(`Error in fetching data from server + ${err.message}`);
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
          this.showError(`Failed to add issue: ${error.message}`);
        });
      }
    }).catch((err) => {
      this.showError(`Error in sending Data to server : ${err.message}`);
    });
  }

  deleteIssue(id) {
    fetch(`/api/issues/${id}`, { method: 'DELETE' }).then((response) => {
      if (!response.ok) {
        this.showError('Failed to delete issue');
      } else {
        this.loadData();
      }
    });
  }

  render() {
    return (
      <div>
        <Panel>
          <Panel.Heading>
            <Panel.Title toggle>
              Filter
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <IssueFilter
                setFilter={this.setFilter}
                initFilter={this.state.query}
              />
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
        <IssueTable issues={this.state.issues} deleteIssue={this.deleteIssue} />
        <IssueAdd createIssue={this.createIssue} />
        <Toast
          showing={this.state.toastVisible}
          onDismiss={this.dismissToast}
          message={this.state.toastMessage}
          bsStyle={this.state.toastType}
        />
      </div>
    );
  }
}

const IssueRow = (props) => {
  function onDeleteClick() {
    props.deleteIssue(props.issue._id);
  }
  return (
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
      <td>
        <Button bsSize="xsmall" onClick={onDeleteClick}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </Button>
      </td>
    </tr>
  );
};

function IssueTable(props) {
  const issueRows = props.issues.map(issue =>
    <IssueRow key={issue._id} issue={issue} deleteIssue={props.deleteIssue} />);
  return (
    <Table bordered condensed hover responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Status</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Effort</th>
          <th>Completion date</th>
          <th>Title</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {issueRows}
      </tbody>
    </Table>
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
  deleteIssue: PropTypes.func.isRequired,
};

IssueTable.propTypes = {
  issues: PropTypes.arrayOf({
  }).isRequired,
  deleteIssue: PropTypes.func.isRequired,
};

IssueList.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    query: PropTypes.shape({}).isRequired,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default IssueList;
