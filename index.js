// require express so we can use it
const express = require('express');
// require body-parser to manage data in requests
const bodyParser = require('body-parser');

// create and set up express app
const app = express();

// parse received data as json file
app.use(bodyParser.json());

// use routes defined in files adding '/api' to the route
// 1st param: additional route infix (localhost:4000/XXXXX/clients)
// 2nd param: location of file api.js (/routes/api.js file)
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Express is ready. Listening for requests...')
});
