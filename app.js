
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var login = require('./routes/login');
var signup = require('./routes/signup');
var index = require('./routes/index');
var create = require('./routes/create');
var account = require('./routes/account');
var world = require('./routes/world');
var filter = require('./routes/filter');
var manage = require('./routes/manage');
var webcam = require('./routes/webcam');
var voice = require('./routes/voice');
var content = require('./routes/content');
var add = require('./routes/add');
var addVoice = require('./routes/addVoice');
var about = require('./routes/about');
var help = require('./routes/help');
var contact = require('./routes/contact');
var edit = require('./routes/edit');
var videoEditing = require('./routes/videoEditing');
// var deleteV = require('./routes/deleteV');
// var addComment = require('./routes/addComment');
// Example route
// var user = require('./routes/user');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', login.view);
app.get('/signup', signup.view)
app.get('/index', index.view);
app.get('/create', create.view);
app.get('/account', account.view);
app.get('/world', world.view);
app.get('/filter', filter.view);
app.get('/manage', manage.view);
app.get('/webcam', webcam.view);
app.get('/voice', voice.view);
app.get('/content/:id', content.viewPrev);
app.get('/add', add.addDiary);
app.get('/addComment', add.addComment);
app.get('/addVoice', addVoice.addDiary);
app.get('/about', about.view);
app.get('/help', help.view);
app.get('/contact', contact.view);
app.get('/filterDiary/:id', add.filter);
app.get('/edit', edit.view);
// app.get('/deleteV', add.deleteV);
app.get('/videoEditing', videoEditing.view);


// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
