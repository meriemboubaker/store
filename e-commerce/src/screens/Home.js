import Card from "../components/Card"
function Home (props){
  
    return(
        <div className="d-flex flex-wrap">{props.products.map(elm=><Card Product={elm}></Card>)}</div>
    )
}
export default Home