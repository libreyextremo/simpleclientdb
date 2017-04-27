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
  console.log(req.body);
  res.send({
    type: 'POST',
    company_nif: req.body.company_nif,
    company_name: req.body.company_name,
    company_type: req.body.company_type,
    company_num_employees: req.body.company_num_employees,
    company_balance: req.body.company_balance,
    company_cnae: req.body.company_cnae,
    company_address: req.body.company_address,
    company_phone: req.body.company_phone,
    company_city: req.body.company_city,
    company_state: req.body.company_state,
    company_postal_code: req.body.company_postal_code,
    company_country: req.body.company_country,
    company_email: req.body.company_email,
    company_year_of_creation: req.body.company_year_of_creation,
    company_isActive: req.body.company_isActive,
    company_picture: req.body.company_picture,
    company_member: req.body.company_member,
    company_bill: req.body.company_bill
  });
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
