const mongoose = require ('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
 title:String,
 author:{
    type:String,
    default:"arthur"
 }
 
  
});
const Blog = mongoose.model('blog',blogSchema)
module.exports = Blog