module.exports = function(app) {
	var express = require('express');
	var notebooksRouter = express.Router();
	var bodyParser = require('body-parser');
	app.use(bodyParser.json());

	var nedb = require('nedb');
	var notebookDB = new nedb({ filename : 'notebooks', autoload: true});

	notebooksRouter.get('/', function(req, res) {
		notebookDB.find(req.query).exec(function(error, notebooks){
			res.send({
				'notebooks': notebooks
			});
		});
	});

	notebooksRouter.post('/', function(req, res){
		notebookDB.find({}).sort({id : -1}).limit(1).exec(function(err, notebooks){
			if(notebooks.length != 0){
				req.body.notebook.id = notebooks[0].id + 1;
			}
			else{
				req.body.notebook.id = 1;
			}
			console.log('notebooks length '+notebooks.length);
			notebookDB.insert(req.body.notebook, function(err, newNotebook){
				res.status(201);
				res.send(JSON.stringify({notebook : newNotebook}));
			});
		});
	});
	app.use('/api/notebooks', notebooksRouter);
}