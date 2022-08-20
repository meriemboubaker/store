import {useState} from 'react'
import axios from 'axios'
function Blog(){
    const [BlogInput, SetBlogInput] =useState({})
    const getInput=(e)=>
     {
        SetBlogInput({...BlogInput,[e.target.name]:e.target.value})
     }
     const SendBlog=()=>{ 
     axios.post('http://localhost:5000/blogs/createblog',BlogInput).then(()=> console.log("accepted"))
     }
    return(
        <div>
        <input name='title' onChange={(e)=>getInput(e)} />
        <input name='author' onChange={(e)=>getInput(e)} />
        <button onClick={SendBlog} >submit</button>
        </div>
    )
}
export default  Blog ;