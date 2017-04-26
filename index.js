// require express so we can use it
const express = require('express');

// create and set up express app
const app = express();

// use routes defined in files adding '/api' to the route
// 1st param: additional route (localhost:4000/XXXXX/)
// 2nd param: location of file api.js (/routes/api.js file)
app.use('/api', require('./routes/api'));

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Express is ready. Listening for requests...')
});
