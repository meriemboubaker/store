import {useState} from 'react'
import axios from 'axios'
function Product(){
    const [productInput, SetproductInput] =useState({})
    const getInput=(e)=>
     {
        SetproductInput({...productInput,[e.target.name]:e.target.value})
     }
     const Sendproduct=()=>{ 
     axios.post('http://localhost:5000/products/createproduct',productInput).then(()=> console.log("accepted"))
     }
    return(
        <div>
        <input name='title' onChange={(e)=>getInput(e)} />
        <input name='author' onChange={(e)=>getInput(e)} />
        <button onClick={Sendproduct} >submit</button>
        </div>
    )
}
export default  Product ;