const User = require("../models/user.js");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const {generatetoken} = require("../middleware/auth.js")
async function createuser(req, res) {
  console.log(req.body);
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const password = req.body.password;
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);
  const user = await User.create({
    name: req.body.name,
    age: req.body.age,
    password: hashedPassword,
    email: req.body.email,
  });
}
async function loginuser(req,res){
 try{const user=await User.findOne({email:req.body.email})
 if(!user){
    res.status(404).send("user do not exist")
 }
console.log(user)
const userpassword=req.body.password
const testpassword=await bcrypt.compare(userpassword,user.password)
if(testpassword){
const token = generatetoken(user)
res.send(token)}else{
    res.status(401).send("you arent authorized")
}
}
catch(err){
    console.log(err)
    res.status(500).send('error')
}
}
function getuser(req, res) {
  User.find().then((response) => res.send(response));
}

module.exports = { createuser, getuser,loginuser };
