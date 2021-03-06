'use srtict';
const MongoCLient = require('mongodb');

function usage() {
	console.log('Usage:');
	console.log('node', __filename, '<option>');
	console.log('Where opyion is one of:');
	console.log(' callbacks Use the callbacks paradigm');
	console.log(' promises Use the promises paradigm');
	console.log(' generators Use the generators paradigm');
	console.log(' async Use the async paradigm');
}

if(process.argv.length < 3) {
	console.log('Incorrect number of arguments');
	usage();
} else {
	if(process.argv[2] === 'callbacks') {
		testWithCallBacks();
	} else if(process.argv[2] === 'promises') {
		testWithPromises();
	} else if(process.argv[2] === 'generators') {
		testWithGenerators();
	} else if(process.argv[2] === 'async') {
		testWithAsync();
	} else {
		console.log('Invalid option:', process.argv[2]);
		usage();
	}
}

function testWithCallBacks() {
	MongoCLient.connect('mongodb://localhost/playground', function(err, db) {
		db.collection('employees').insertOne({id: 1, name: 'A. Callback'}, function(err, result) {
			console.log('Result of Insert:', result.insertedId);
			db.collection('employees').find({id: 1}).toArray(function(err, docs) {
				console.log('Result of find: ', docs);
				db.close();
			});
		});
	});
}

function testWithPromises() {
	let db;
	MongoCLient.connect('mongodb://localhost/playground').then(connection => {
		db = connection;
		return db.collection('employees').insertOne({id:1, name: 'B. Promises'});
	}).then(result => {
		console.log('Result of insert:', result.insertedId);
		return db.collection('employees').find({id:1}).toArray();
	}).then(docs => {
		console.log('Result of find:', docs);
		db.close();
	}).catch(err => {
		console.log('ERROR', err);
	});
}

function testWithGenerators() {
	const co = require('co');
	co(function*(){
		const db = yield MongoCLient.connect('mongodb://localhost/playground');

		const result = yield db.collection('employees').insertOne({id: 1, name: 'C. Generators'});
		console.log('Result of insert :' , result.insertedId);

		const docs = yield db.collection('employees').find({id: 1}).toArray();
		console.log('Result of find:', docs);

		db.close();
	}).catch(err => {
		console.log('ERROR', err);
	});
}

function testWithAsync() {
	const async = require('async');

	let db;

	async.waterfall([
		next => {
			MongoCLient.connect('mongodb://localhost/playground', next);
		},
		(connection, next) => {
			db = connection;
			db.collection('employees').insertOne({id: 1, 'D. Async'}, next);
		},
		(insertResult, next) => {
			console.log('Insert result: ', insertResult.insertedId);
			db.collection('employees').find({id:1}).toArray(next);
		},
		(docs, next) => {
			console.log('Result of find:', docs);
			db.close();
			next(null, 'All Done');
		}
	], (err, result) => {
		if(err) {
			console.log(err);
		} else {
			console.log(result);
		}
	});
}
