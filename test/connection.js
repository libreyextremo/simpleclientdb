const mongoose = require('mongoose');

// use ES6 promises library instead of mongoose promise library
mongoose.Promise = global.Promise;

// Connect to mongodb
mongoose.connect('mongodb://localhost/simpleclientdb');

// launch when connection is opened
console.log('Launch connection.js');
mongoose.connection.once('open', function(){
  console.log('MongoDB connection has been made succesfully.')
}).on('error', function(error){
  console.log('MongoDB connection error:', error);
});
console.log('End connection.js');
