var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Routes
var index = require('./routes/index');
var users = require('./routes/users');
var projects = require('./routes/projects');
var tasks = require('./routes/tasks');

var port = 3000;

var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Static Resources
app.use(express.static(path.join(__dirname, 'client')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', index);
app.use('/users', users);
app.use('/api/projects', projects);
app.use('/api/tasks', tasks);

app.listen(port, function(){
  console.log('Server listening on port: ' + port);
});
