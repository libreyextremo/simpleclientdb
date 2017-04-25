const express = require('express');
const router = express.Router();

// set reply to "localhost:4000/" get request
// req: request information
// res: response to the request
router.get('/', function(req, res){
  console.log('GET request');
  res.send("<html><body><h1>Welcome to SimpleClientDB</h1><p>by JM Sobrinos</p></body></html>");
});

// set reply to "localhost:4000/clients" get request
// get client list from the db
router.get('/clients', function(req, res){
  console.log('GET /clients request');
  res.send({type: 'GET'});
});

// add a new client to the db
router.post('/clients', function(req, res){
  console.log('POST /clients request');
  res.send({type: 'POST'});
});

// update a client in the db
router.put('/clients/:id', function(req, res){
  console.log('PUT /clients request');
  res.send({type: 'PUT'});
});

// delete a client in the db
router.delete('/clients/:id', function(req, res){
  console.log('DELETE /clients request');
  res.send({type: 'DELETE'});
});

module.exports = router;
