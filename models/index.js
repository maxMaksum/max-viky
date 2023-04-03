import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
  name      : String,
  rm        : Number,
  nama      : String,
  teacherId : {type: String, ref: 'Customer', require:false},
  desaId    : {type: String, ref: 'Desa',require:false},
  rt        : Number,
  rw        : Number
})



const DesaSchema = new mongoose.Schema({
  nama      : String,
  customer  : [{type: String, ref: 'Customer'}],

})


// const AlamatDesa =  mongoose.model.AlamatDesa || mongoose.model('AlamatDesa', desaSchema);

const Customer = mongoose.models.Customer || mongoose.model("Customer", CustomerSchema );
const Desa = mongoose.models.Desa || mongoose.model("Desa", DesaSchema );

export {Customer, Desa}