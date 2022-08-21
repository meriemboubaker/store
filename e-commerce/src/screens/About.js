import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
function About (){
    const navigate=useNavigate()
const token = localStorage.getItem("token")
useEffect(()=>{
if(!token)
{navigate("/")}},[])
    return(
        <div>About</div>
    )
}
export default About