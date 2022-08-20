import {useParams} from  "react-router-dom";
function Product (props){
    const param=useParams()
    console.log(param)
    const prod = props.products.find(elm=>elm.id===param.id)
    console.log(prod)
    return(
        <div>
            <h1>color: {prod.color}</h1>
            <h1>productName: {prod.productName}</h1>
            <h1>department: {prod.department}</h1>
            <h1>price: {prod.price}</h1>
            <h1>productAdjective: {prod.productAdjective}</h1>
            <h1>productMaterial: {prod.productMaterial}</h1>
            <h1>product: {prod.product}</h1>
        </div>
    )
}
export default Product