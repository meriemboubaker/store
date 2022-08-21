const express = require('express')
const productRoutes = require("./routes/productRoutes")
const userRoutes = require("./routes/userRoutes")
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
app.use('/products',productRoutes)
app.use('/users',userRoutes)


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})