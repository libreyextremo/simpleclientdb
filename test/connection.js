const mongoose = require('mongoose');

// Connect to mongodb
mongoose.connect('mongodb://localhost/testaroo');

// launch when connection is opened
mongoose.connection.once('open', function(){
  console.log('1.- Connection has been made succesfully.')
}).on('error', function(error){
  console.log('1.- Connection error:', error);
});
