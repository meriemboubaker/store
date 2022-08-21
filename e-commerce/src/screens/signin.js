import {useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
function Signin (){
    const [userInput,setUserInput]=useState({})
const navigate=useNavigate()
    function getInput(e){
        setUserInput({...userInput,[e.target.name]:e.target.value})
    }
    console.log(userInput)
    function sendData(e){
        e.preventDefault(e)
        axios.post("http://localhost:5000/users/loginuser",userInput).then((res)=>{localStorage.setItem('token',res.data)
    navigate('/')})

    }
    return(
        <div>
            <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={(e)=>sendData(e)} >
             <label for="password">password</label> <input id="password" name="password" type="password" onChange={(e)=>getInput(e)}></input>
             <label for="email">email</label> <input id="email"  name="email" type="text" onChange={(e)=>getInput(e)} required></input>
             <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Signin