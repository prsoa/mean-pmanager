var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

mongoose.connect('mongodb://admin:mean-pmanager@ds247027.mlab.com:47027/mean-pmanager', { useMongoClient: true });

// Routes
var index = require('./routes/index');
var usersController = require('./controllers/usersController');
var projectsController = require('./controllers/projectsController');
var tasksController = require('./controllers/tasksController');

var port = 3000;

var app = express();

// Session Handling
app.use(session({
  secret: 'dingo',
  resave: true,
  saveUninitialized: false,
  maxAge  : new Date(Date.now() + 3600000), //1 Hour
  expires : new Date(Date.now() + 3600000), //1 Hour
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}));

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

// Static Resources
// Angular App
app.use(express.static(path.join(__dirname, 'public')));
//app.use(express.static(path.join(__dirname, 'public/mean-pmanager/dist')));

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Fire controllers
usersController(app);
projectsController(app);
tasksController(app);

app.use('/', index);
//app.use('/users', users);
//app.use('/api/projects', projects);
//app.use('/api/tasks', tasksController(app));


//ERROR HANDLING - TO DO: Improve error handling
/****/

// catch 404 and forward to error handler

app.use(function(req, res, next){
  res.status(404);

  // respond with html page
  if (req.accepts('html')) {
    res.render('404', { url: req.url, session: req.session });
    return;
  }

  // respond with json
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }

  // default to plain-text. send()
  res.type('txt').send('Not found');
});


// define as the last app.use callback
app.use(function(err, req, res, next) {
  // Do logging and user-friendly error message display
  console.error(err);
  // Assuming that template engine is plugged in
  res.render('error', {
            message: err.message,
            error: err,
            session: req.session
        });
})

/****/

app.listen(port, function(){
  console.log('Server listening on port: ' + port);
});
