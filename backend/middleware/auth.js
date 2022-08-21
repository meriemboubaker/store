var jwt = require('jsonwebtoken');
function generatetoken(user){
   return jwt.sign({ name:user.name,age:user.age,password:user.password,email:user.email }, 'shhhhh',{expiresIn:'30d'});
}
async function authmiddleware(req,res,next){
const authorization = req.headers.authorization
if(authorization){
const token=authorization.slice(7,authorization.length)
jwt.verify(token,'shhhhh',(err,decode)=>{
if(err){
    res.status(401).send("invalid request")

}else{
    console.log("passed")
    req.user=decode;
   
    next()
}
})
}}
module.exports={generatetoken,authmiddleware}