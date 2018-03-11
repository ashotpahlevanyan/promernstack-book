const express = require('express');

const app = express();

app.use(express.static('static'));

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

app.listen(3000, function() {
	console.log('App Started on Port 3000');
});
