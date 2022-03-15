// express sever
//distServer.js will be used to server the static files from the dist folder.
// Not for production use. Only for local production build debugging.
import express from 'express';
import path from 'path';
import open from 'open';
// make sure gzip is enabled
import compression from 'compression';

/* eslint-disable no-console */

const port = 8080;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

//Endpoint extracted and moved to Heroku.
// To bring back, uncomment below and remove Heroku endpoint.
// Go to api/baseUrl.js to do so. Just leave a / to hit below.
// app.get('/users', function (req, res) {
//   // Hard code, but you would normally grab this from a database
//   res.json([
//     {id: 1, firstName: 'Maccy', lastName: 'Mac', email: 'mac@gmail.com', saved: '1000'},
//     {id: 2, firstName: 'Linus', lastName: 'Linux', email: 'linux@gmail.com', saved: '2000'},
//     {id: 3, firstName: 'Wendy', lastName: 'Windows', email: 'windows@gmail.com', saved: '3000'},
//   ]);
// });

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http:/localhost:' + port);
  }
});
