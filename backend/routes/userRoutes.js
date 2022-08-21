const express = require ("express")
const router = express.Router()
const {createuser,getuser,loginuser} =  require ('../controllers/userController.js')
const { body } = require('express-validator');

router.post('/createuser',body('password').isLength({ min: 5 }),createuser)
router.post('/loginuser',loginuser)
router.get('/getuser',getuser)
module.exports = router 