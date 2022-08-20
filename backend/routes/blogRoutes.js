const express = require ("express")
const router = express.Router()
const Blog = require('../models/blog.js')
const {createBlog,getBlogs} =  require ('../controllers/blogController.js')

router.post('/createblog',createBlog)
router.get('/getblogs',getBlogs)
module.exports = router 