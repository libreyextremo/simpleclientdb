const mocha = require('mocha');
const assert = require('assert');
const ClientModel = require('../models/client_model');

//describe client model tests
describe('Client collection tests', function(){

  // actions executes before each test
  beforeEach(function(done){

    var clientRecord1 = new ClientModel({
      company_nif: 'A05223345',
      company_name: 'Naturaesencia Cosmetics',
      company_type: 'Professional services',
      company_num_employees: 3,
      company_balance: 4902,
      company_cnae: 4010,
      company_address: '1, Spain square Street',
      company_phone: '+34925977876',
      company_city: 'Talavera',
      company_state: 'Toledo',
      company_postal_code: 45600,
      company_country: 'Spain',
      company_email: 'tony@naturaesencia.com',
      company_year_of_creation: 2015,
      company_isActive: true,
      company_picture: '',
      company_member: [
        {
          member_position: 'President',
          member_name: 'Tony Gomez',
          member_info: '',
          member_phone: ''
        },
        {
          member_position: 'VicePresident',
          member_name: 'Jeremias Dominguez',
          member_info: '',
          member_phone: ''
        }
      ],
      company_bill: [
        {
          bill_id: 201703050001,
          bill_date: '03/05/2017',
          bill_concept: 'Stationery design',
          bill_total: 90
        },
        {
          bill_id: 201703040002,
          bill_date: '03/04/2017',
          bill_concept: 'Logotype design',
          bill_total: 100
        },
        {
          bill_id: 201703040003,
          bill_date: '03/04/2017',
          bill_concept: 'Web design',
          bill_total: 1200
        }
      ]
    });

    var clientRecord2 = new ClientModel({
      company_nif: 'T08000233',
      company_name: 'Swan Writer',
      company_type: 'Professional services',
      company_num_employees: 1,
      company_balance: 45000,
      company_cnae: 3009,
      company_address: '234, Miguel Angel Street',
      company_phone: '+34925812333',
      company_city: 'Talavera',
      company_state: 'Toledo',
      company_postal_code: 45600,
      company_country: 'Spain',
      company_email: 'swanwriter@hotmail.com',
      company_year_of_creation: 2002,
      company_isActive: true,
      company_picture: '',
      company_member: [
        {
          member_position: 'President',
          member_name: 'Swan',
          member_info: '',
          member_phone: ''
        }
      ],
      company_bill: [
        {
          bill_id: 201701230001,
          bill_date: '01/23/2017',
          bill_concept: 'Book cover design',
          bill_total: 350
        }
      ]
    });

    clientRecord1.save().then(function() {
      assert(clientRecord1.isNew === false);
      clientRecord2.save().then(function() {
        assert(clientRecord2.isNew === false);
        done();
      });
    });

  });

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

    clientRecord.save().then(function() {
      assert(clientRecord.isNew === false);
      done();
    });

  });

  // finding a record in client collection
  it('Finding a record from client collection', function(done){

    ClientModel.findOne({ company_name: 'Naturaesencia Cosmetics' }).then(function(result){
      assert(result.company_name === 'Naturaesencia Cosmetics');
      done();
    });

  });

});
