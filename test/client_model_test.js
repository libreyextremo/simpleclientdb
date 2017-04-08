const mocha = require('mocha');
const assert = require('assert');
const ClientModel = require('../models/client_model');

//describe client model tests
describe('Client collection tests', function(){

  //tests
  it('hello world test', function(){
    assert('hello world' === 'hello world');
  });

  // saving a record in client collection
  it('Saving a record in client collection', function(done){

    var clientRecord = new ClientModel({
      company_nif: 'A04113629',
      company_name: 'Garvin Pottery S.L.',
      company_type: 'Professional services',
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
          bill_date: '08/04/2017',
          bill_concept: 'Logotype design',
          bill_total: 150
        },
        {
          bill_id: 201704080002,
          bill_date: '08/04/2017',
          bill_concept: 'Stationery design',
          bill_total: 80
        }
      ]
    });

    clientRecord.save().then(function() {
      assert(clientRecord.isNew === false);
      done();
    });

  });

});