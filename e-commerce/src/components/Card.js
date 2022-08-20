import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import {useNavigate} from "react-router-dom";
function ProductCard(props) {
  const {
    id,
    color,
    department,
    productName,
    price,
    productAdjective,
    productMaterial,
    product,
    image,
  } = props.Product;

  const navigate=useNavigate();
  return (
    <div>
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>color:{color}<br/>
          department:{department}<br/>
          productName:{productName}<br/>
          price:{price}<br/>
          productAdjective:{productAdjective}<br/>
          productMaterial:{ productMaterial}<br/>
          product:{product}<br/>
          </Card.Text>
          <Button variant="primary" onClick={()=>navigate(`/product/${id}`)}>Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
export default ProductCard;
