// Bring in our dependencies
const bodyParser = require('body-parser');

var app = require('express')();
app.use(bodyParser.urlencoded({ extended: true }));
const routes = require('./routes');
const PORT = process.env.PORT || 3500;
const MongoClient = require('mongodb').MongoClient;
var Server = require('mongodb').Server;
var db;

app.use(bodyParser.json());

MongoClient.connect('mongodb://sekhar:sekhar@ds151631.mlab.com:51631/trainer', (err, database) => {
    if (err) return console.log(err);
    db = database;
    // Turn on that server!
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}`);
    });
    app.set('db', db);
    app.use('/', routes);
});
//  Connect all our routes to our application

