const product = require('../models/product.js')


function createproduct(req,res){
    console.log(req.body)
product.create({title:req.body.title}).then(res=>console.log("accepted"))

}
function getproducts(req,res){
    console.log('hello')
product.find().then(response=>res.send(response))
}
module.exports = {createproduct , getproducts}