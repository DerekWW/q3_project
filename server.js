
'use strict';

/* eslint-disable max-params, no-console */

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const port = process.env.PORT || 8000;
const path = require('path');

app.disable('x-powered-by');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join('public')));

// CSRF protection
// const app.use((req, res, next) => {
//   if (/json/.test(req.get('Accept'))) {
//     return next();
//   }
//   res.sendStatus(406);
// });

const users = require('./routes/users');
const friends = require('./routes/friends');
const token = require('./routes/token');
const userMovies = require('./routes/user_movies');
const movieSearch = require('./routes/movie_search');
const userSearch = require('./routes/user_search');

app.use(users);
app.use(friends);
app.use(token);
app.use(userMovies);
app.use(movieSearch);
app.use(userSearch);

app.use((_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use((err, _req, res, _next) => {
  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  console.error(JSON.stringify(err, null, 2));

  if (err.status) {
    return res
      .status(err.status)
      .set('Content-Type', 'text/plain')
      .send(err.statusText);
  }

  console.error(err.stack);
  res.sendStatus(500);
});

app.listen(port, () => {
  console.log('Listening on port', port);
});
