const express = require('express')
const Blog = require('./user')
const app = express()
const data = require("./data")
const port = 5000
const cors = require("cors")
const mongoose = require("mongoose")

const path = require('path')
require('dotenv').config()
mongoose.connect(process.env.MONGO).then(
  console.log("database connected")
);

app.use(cors())
app.use(express.json())
app.post('/send', (req, res) => {
  Blog.create({title:"blog"}).then(res=>console.log('accepted'))
});
app.get('/product/:id', (req, res) => {
    console.log('Got param:', req.params.id);
    res.send(data.find(elm=>elm.id===req.params.id))
    
});
console.log(data)
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})