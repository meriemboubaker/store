import {useState} from "react"
import axios from "axios"
function Login (){
    const [userInput,setUserInput]=useState({})

    function getInput(e){
        setUserInput({...userInput,[e.target.name]:e.target.value})
    }
    console.log(userInput)
    function sendData(e){
        e.preventDefault(e)
        axios.post("http://localhost:5000/users/createUser",{headers:{token:localStorage.getItem("token")}},userInput).then(()=>{console.log("accepted!")})

    }
    return(
        <div>
            <form className="d-flex flex-column justify-content-center align-items-center" onSubmit={(e)=>sendData(e)} >
             <label for="name">name</label> <input id="name" name="name" type="text" onChange={(e)=>getInput(e)}></input>
             <label for="age">age</label> <input id="age" name="age" type="text" onChange={(e)=>getInput(e)}></input>
             <label for="password">password</label> <input id="password" name="password" type="password" onChange={(e)=>getInput(e)}></input>
             <label for="email">email</label> <input id="email"  name="email" type="text" onChange={(e)=>getInput(e)} required></input>
             <button type="submit">submit</button>
            </form>
        </div>
    )
}
export default Login 