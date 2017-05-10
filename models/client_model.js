const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema and model
const GeoSchema = new Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
}); // use GeoJson

const MemberSchema = new Schema({
  member_position: { type: String },
  member_name: { type: String },
  member_info: { type: String },
  member_phone: { type: String }
});

const BillSchema = new Schema({
  bill_id: { type: Number },
  bill_date: { type: Date, default: Date.now },
  bill_concept: { type: String },
  bill_total: { type: Number }
});

const ClientModelSchema = new Schema({
  company_nif: {type: String, required: [true, 'NIF field is required'] },
  company_name: {type: String, required: [true, 'Name field is required'] },
  company_type: String,
  company_num_employees: Number,
  company_balance: Number,
  company_cnae: Number,
  company_address: String,
  company_phone: String,
  company_city: String,
  company_state: String,
  company_postal_code: Number,
  company_country: String,
  company_email: String,
  company_year_of_creation: Number,
  company_isActive: Boolean,
  company_picture: String,
  geometry: GeoSchema,
  company_member: [MemberSchema],
  company_bill: [BillSchema]
});

// create model (relation between ClientModelSchema and clients collection)
const ClientModel = mongoose.model('clients', ClientModelSchema);

module.exports = ClientModel;
