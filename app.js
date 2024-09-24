// mongoDB connection
const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');

// express loggers
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// require config
require('dotenv').config();

// routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// get port from env
var PORT = process.env.PORT || 3000;
var MONGO_URI = process.env.MONGO_URI;

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect(MONGO_URI);
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/error');
});

module.exports = app;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
