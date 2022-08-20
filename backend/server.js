const express = require('express')
const blogRoutes = require("./routes/blogRoutes")
const app = express()

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
app.use('/blogs',blogRoutes)
app.get('/product/:id', (req, res) => {
    console.log('Got param:', req.params.id);
    res.send(data.find(elm=>elm.id===req.params.id))
    
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})