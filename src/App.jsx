const contentNode = document.getElementById('contents');

const issues = [
	{
		id: 1, status: 'Open', owner: 'Revan',
		created: new Date('2016-08-15'), effort: 5,completionDate: undefined,
		title: 'Error in Console when clicking add'
	},
	{
		id: 2, status: 'Assigned', owner: 'Eddie',
		created: new Date('2016-08-16'), effort: 14,completionDate: new Date('2016-08-30'),
		title: 'Missing bottom border on panel'
	},
];

class IssueFilter extends React.Component {
	render () {
		return(
			<div>This is a placeholder to Filter Issues.</div>
		);
	}
}


class IssueRow extends React.Component {
	render() {
		const issue = this.props.issue;
		return(
			<tr>
				<td>{issue.id}</td>
				<td>{issue.status}</td>
				<td>{issue.owner}</td>
				<td>{issue.created.toDateString()}</td>
				<td>{issue.effort}</td>
				<td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
				<td>{issue.title}</td>
			</tr>
		);
	}
}
IssueRow.propTypes = {
	issue: React.PropTypes.object.isRequired
};


class IssueTable extends React.Component {
	render () {
		const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue}/>);
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
}

IssueTable.propTypes = {
	issues: React.PropTypes.array.isRequired
};

class IssueAdd extends React.Component {
	render () {
		return(
			<div>This is a placeholder to Add Issues.</div>
		);
	}
}


class IssueList extends React.Component {
	render () {
		return(
			<div>
				<h1>Issue Tracker</h1>
				<IssueFilter />
				<hr/>
				<IssueTable issues={issues}/>
				<hr/>
				<IssueAdd />
			</div>
		);
	}
}


ReactDOM.render(<IssueList />, contentNode);
