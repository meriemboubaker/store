const mongoose = require ('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
 title:String,
 author:{
    type:String,
    default:"arthur"
 }
 
  
});
const product = mongoose.model('product',productSchema)
module.exports = product