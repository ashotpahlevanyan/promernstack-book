const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
	render () {
		return(
			<div>This is a placeholder to Filter Issues.</div>
		);
	}
}

class IssueTable extends React.Component {
	render () {
		return(
			<div>This is a placeholder for the issue Table.</div>
		);
	}
}

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
				<IssueFilter/>
				<hr/>
				<IssueTable/>
				<hr/>
				<IssueAdd/>
			</div>
		);
	}
}


ReactDOM.render(<IssueList />, contentNode);