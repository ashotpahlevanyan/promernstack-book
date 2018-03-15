'use strict';

import IssueAdd from './IssueAdd.jsx';
import IssueFilter from './IssueFilter.jsx';

export default class IssueList extends React.Component {
	constructor() {
		super();

		this.state = {issues: []};
		this.createIssue = this.createIssue.bind(this);
	}

	componentDidMount() {
		this.loadData();
	}

	loadData() {
		fetch('/api/issues/').then(response =>{
			if(response.ok) {
				response.json().then(data => {
					console.log('Total Count of records: ', data._metadata.total_count);
					data.records.forEach(issue => {
						issue.created = new Date(issue.created);
						if(issue.completionDate) {
							issue.completionDate = new Date(issue.completionDate);
						}
					});
					this.setState({issues: data.records});
				});
			} else {
				response.json().then(error => {
					alert('Failed to fetch issue: ', error.message);
				});
			}
		}).catch(err => {
			alert("Error in fetching data from server", err);
		});
	}

	createIssue(newIssue) {
		fetch('/api/issues/', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(newIssue),
		}).then(response => {
			if (response.ok) {
				response.json().then(updatedIssue => {
					updatedIssue.created = new Date(updatedIssue.created);
					if (updatedIssue.completionDate) {
						updatedIssue.completionDate = new Date(updatedIssue.completionDate);
					}
					const newIssues = this.state.issues.concat(updatedIssue);
					this.setState({issues: newIssues});
				});
			} else {
				response.json().then(error => {
					alert('Failed to add issue: ' + error.message);
				});
			}
		}).catch(err => {
			alert('Error in sending Data to server : ' + err.message);
		});
	}

	render () {
		return(
			<div>
				<h1>Issue Tracker</h1>
				<IssueFilter />
				<hr/>
				<IssueTable issues={this.state.issues}/>
				<hr/>
				<IssueAdd createIssue = {this.createIssue}/>
			</div>
		);
	}
}

const IssueRow = (props) => (
	<tr>
		<td>{props.issue._id}</td>
		<td>{props.issue.status}</td>
		<td>{props.issue.owner}</td>
		<td>{props.issue.created.toDateString()}</td>
		<td>{props.issue.effort}</td>
		<td>{props.issue.completionDate ? props.issue.completionDate.toDateString() : ''}</td>
		<td>{props.issue.title}</td>
	</tr>
);

function IssueTable(props) {
	const issueRows = props.issues.map(issue => <IssueRow key={issue._id} issue={issue}/>);
	return(
		<table className='bordered-table'>
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
