const bodyParser = require('body-parser');

const express = require('express');

const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

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

app.get('/api/issues', (req,res) => {
	const metadata = {total_count: issues.length};
	res.json({_metadata: metadata, records: issues});
});

app.post('/api/issues/', (req, res) => {
	const newIssue = req.body;
	newIssue.id = issues.length + 1;
	newIssue.created = new Date();
	if(!newIssue.status) {
		newIssue.status = 'New';
	}
	issues.push(newIssue);

	res.json(newIssue);
});

app.listen(3000, function() {
	console.log('App Started on Port 3000');
});
// curl -s http://localhost:3000/api/issues \
// 	--data '{"title": "Test Test", "owner": "yo"}' \
// --header 'Content-Type: application/json'
// {
// 	"title" : "Test Test",
// 	"owner" : "me",
// 	"created" : "2016-08-07T15:20:36.579Z",
// 	"status" : "New",
// 	"id" : 9
// }
