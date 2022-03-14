// express sever
import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 8080;
const app = express();
const compiler = webpack(config);

app.use(
  require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function (req, res) {
  // Hard code, but you would normally grab this from a database
  res.json([
    {id: 1, firstName: 'Maccy', lastName: 'Mac', email: 'mac@gmail.com', saved: '1000'},
    {id: 2, firstName: 'Linus', lastName: 'Linux', email: 'linux@gmail.com', saved: '2000'},
    {id: 3, firstName: 'Wendy', lastName: 'Windows', email: 'windows@gmail.com', saved: '3000'},
  ]);
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http:/localhost:' + port);
  }
});
