const users = require('express').Router();;
const findObject = require('../../utils/findObject');

users.get('/', function(req, res) {
});

users.post('/', (req,res)=>{
	var db = req.app.get('db');
	console.log('req.body.user '+req.body.user.name);
	db.collection('users').save(req.body.user, (err, res)=>{
		if(err) return console.log(err);
		console.log('save successfully');
	});
});

module.exports = users;
