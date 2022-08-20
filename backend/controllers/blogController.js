const Blog = require('../models/blog.js')


function createBlog(req,res){
    console.log(req.body)
Blog.create({title:req.body.title}).then(res=>console.log("accepted"))

}
function getBlogs(req,res){
Blog.find().then(response=>res.send(response))
}
module.exports = {createBlog , getBlogs}