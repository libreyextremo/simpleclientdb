const mocha = require('mocha');
const assert = require('assert');
const ClientModel = require('../models/client_model');

//describe client model tests
describe('Client collection tests', function(){

  var clientRecord1;
  var clientRecord2;
  var clientRecord3;
  var clientRecord4;
  var clientRecord;

  // actions executes before each test
  beforeEach(function(done){

    clientRecord1 = new ClientModel({
      company_nif: 'A05223345',
      company_name: 'Naturaesencia Cosmetics',
      company_type: 'Health and Social Services',
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

    clientRecord2 = new ClientModel({
      company_nif: 'T08000233',
      company_name: 'Swan Writer',
      company_type: 'Art and Entertainment',
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

    clientRecord3 = new ClientModel({
      company_nif: 'R23699364',
      company_name: 'Aquarium S.L.',
      company_type: 'Fishing',
      company_num_employees: 6,
      company_balance: 23000,
      company_cnae: 3014,
      company_address: 'S/N Principe Avenue',
      company_phone: '+34925892300',
      company_city: 'Talavera',
      company_state: 'Toledo',
      company_postal_code: 45600,
      company_country: 'Spain',
      company_email: 'aquarium.contact@aquariumsl.com',
      company_year_of_creation: 2014,
      company_isActive: true,
      company_picture: '',
      company_member: [
        {
          member_position: 'President',
          member_name: 'Gonzo Duran',
          member_info: '',
          member_phone: ''
        },
        {
          member_position: 'VicePresident',
          member_name: 'Emilio Duran',
          member_info: '',
          member_phone: ''
        }
      ],
      company_bill: [
        {
          bill_id: 201702010001,
          bill_date: '02/01/2017',
          bill_concept: 'Logotype design',
          bill_total: 150
        }
      ]
    });

    clientRecord4 = new ClientModel({
      company_nif: 'B01200895',
      company_name: 'The Brick Brothers',
      company_type: 'Manufacturing industry',
      company_num_employees: 82,
      company_balance: 149005,
      company_cnae: 6004,
      company_address: '23 km. Cervera Road',
      company_phone: '+34925812323',
      company_city: 'Talavera',
      company_state: 'Toledo',
      company_postal_code: 45600,
      company_country: 'Spain',
      company_email: 'manager@thebrickbrothers.com',
      company_year_of_creation: 1996,
      company_isActive: true,
      company_picture: '',
      company_member: [
        {
          member_position: 'President',
          member_name: 'Gordon McCollins',
          member_info: '',
          member_phone: ''
        },
        {
          member_position: 'VicePresident',
          member_name: 'Emile McCollins',
          member_info: '',
          member_phone: ''
        },
        {
          member_position: 'Finantial Director',
          member_name: 'Guile McCollins',
          member_info: '',
          member_phone: ''
        }
      ],
      company_bill: [
        {
          bill_id: 2017040200001,
          bill_date: '04/20/2017',
          bill_concept: 'Logotype design',
          bill_total: 200
        }
      ]
    });

    clientRecord1.save().then(function() {
      clientRecord2.save().then(function() {
        clientRecord3.save().then(function() {
          clientRecord4.save().then(function() {
            done();
          });
        });
      });
    });

  });

  //tests
  it('hello world test', function(){
    assert('hello world' === 'hello world');
  });

  // saving a record in client collection
  it('Saving a record in client collection', function(done){

    clientRecord = new ClientModel({
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

  // finding a record using a var in client collection
  it('Finding a record using a var from client collection', function(done){

    ClientModel.findOne({ company_name: clientRecord2.company_name }).then(function(result){
      assert(result.company_name === clientRecord2.company_name);
      done();
    });

  });

  // finding a record by ID in client collection
  it('Finding a record by ID from client collection', function(done){

    ClientModel.findOne({ _id: clientRecord2._id }).then(function(result){
      assert(result._id.toString() === clientRecord2._id.toString() );
      done();
    });

  });

  // deleting a record in client collection
  it('Deleting a record from client collection', function(done){

    ClientModel.findOneAndRemove({ company_name: 'Aquarium S.L.' }).then(function(){
      ClientModel.findOne({ company_name: 'Aquarium S.L.'}).then(function(result){
        assert(result === null);
        done();
      });
    });

  });

  // deleting a record by ID in client collection
  it('Deleting a record by ID from client collection', function(done){

    ClientModel.findOneAndRemove({ _id: clientRecord2._id }).then(function(){
      ClientModel.findOne({ _id: clientRecord2._id}).then(function(result){
        assert(result === null);
        done();
      });
    });

  });

  // deleting a group of records in client collection
  it('Deleting a group of records from client collection', function(done){

    ClientModel.remove({ company_postal_code: 45600 }).then(function(){
      ClientModel.findOne({ company_postal_code: 45600 }).then(function(result){
        assert(result === null)
        done();
      });
    });

  });

  // deleting a record by var in client collection
  it('Deleting a record by var from client collection', function(done){
    var nametemp = clientRecord2.company_name;
    // if you want to check value:
    //console.log('nametemp: ' + nametemp);
    clientRecord2.remove().then(function(){
      ClientModel.findOne({ company_name: nametemp }).then(function(result){
        assert(result === null)
        done();
      });
    });

  });

  // updating a record in client collection
  it('Updating a record from client collection', function(done){
    var newBalance = 239005;

    ClientModel.findOneAndUpdate({ company_name: clientRecord4.company_name },
        { company_balance: newBalance }).then (function(){
        ClientModel.findOne({_id: clientRecord4._id}).then(function(result){
            assert(result.company_balance === newBalance);
            done();
        });
    });

  });

  // updating a group of records in client collection
  it('Updating a group of records from client collection', function(done){
    var niferror = 'TEMPORARY UNASSIGNED';

    ClientModel.update({ _id: clientRecord4._id },
        { company_nif: niferror }).then (function(){
        ClientModel.findOne({_id: clientRecord4._id}).then(function(result){
            assert(result.company_nif === niferror);
            done();
        });
    });

  });

  // updating a record by var in client collection
  it('Updating a record by var from client collection', function(done){
    var niferror = 'B01200895';

    clientRecord4.update({ _id: clientRecord4._id },
        { company_nif: niferror }).then (function(){
        ClientModel.findOne({_id: clientRecord4._id}).then(function(result){
            assert(result.company_nif === niferror);
            done();
        });
    });

  });

});
