// require express so we can use it
const express = require('express');

// create and set up express app
const app = express();

// set reply to "localhost:4000/" get request
// parameter:
// req: request information
// res: response to the request
app.get('/', function(req, res){
  console.log('GET request');
  // finishing response to the request
  //res.end();
  res.send("<html><body><h1>Welcome to SimpleClientDB</h1></body></html>");
});

// set reply to "localhost:4000/api" get request
app.get('/api', function(req, res){
  console.log('GET api request');
  // finishing response to the request
  res.send({
    company_nif: 'A04113629',
    company_name: 'Garvin Pottery S.L.',
    company_type: 'Manufacturing industry',
    company_num_employees: 21,
    company_balance: 50210,
    company_cnae: 4008,
    company_address: '23, Francisco Quevedo Street',
    company_phone: '+34925909090',
    company_city: 'Talavera',
    company_state: 'Toledo',
    company_postal_code: 45600,
    company_country: 'Spain',
    company_email: 'maindirector@garvinpottery.com',
    company_year_of_creation: 1998,
    company_isActive: true,
    company_picture: '',
    company_member: [
      {
        member_position: 'President',
        member_name: 'Milos Smith',
        member_info: '',
        member_phone: ''
      },
      {
        member_position: 'VicePresident',
        member_name: 'Dwain Stevenson',
        member_info: '',
        member_phone: ''
      },
      {
        member_position: 'Finantial Director',
        member_name: 'Louis Gail',
        member_info: '',
        member_phone: ''
      }
    ],
    company_bill: [
      {
        bill_id: 201704080001,
        bill_date: '04/08/2017',
        bill_concept: 'Logotype design',
        bill_total: 150
      },
      {
        bill_id: 201704080002,
        bill_date: '04/08/2017',
        bill_concept: 'Stationery design',
        bill_total: 80
      }
    ]
  });
});

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Express is ready. Listening for requests...')
});
