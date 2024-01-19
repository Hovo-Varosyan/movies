const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
require('dotenv').config();
const mongoose = require('mongoose')
const db = mongoose.connection
const indexRouter = require('./routes/index');
const app = express();
mongoose.connect(process.env.MONGO_LINK)
console.log(db.client.s.options)
db.on('connected', () => {
  console.log('mongo connected')
})
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};
app.use(cors(corsOptions))

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_KEY));
app.use('/images',express.static(path.join(__dirname, 'uploads', 'users')))
app.use('/film',express.static(path.join(__dirname, 'uploads', 'movies', 'film')))
app.use('/anime',express.static(path.join(__dirname, 'uploads', 'movies', 'anime')))
app.use('/serials',express.static(path.join(__dirname, 'uploads', 'movies', 'serials')))


app.use('/', indexRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
