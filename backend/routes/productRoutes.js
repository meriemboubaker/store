const express = require ("express")
const router = express.Router()
const product = require('../models/product.js')
const {createproduct,getproducts} =  require ('../controllers/productController.js')
const {authmiddleware} = require('../middleware/auth.js')
router.post('/createproduct',createproduct)
router.get('/getproducts',authmiddleware,getproducts)
module.exports = router 