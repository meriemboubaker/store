import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import About from "./screens/About";
import Contact from "./screens/Contact";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./data.js";
import Product from "./screens/product";
import {useEffect, useState} from "react"
import axios from "axios"
function App() {
  const [search,setSearch]=useState("")
  const  [search2 , setSearch2]=useState("")
  const  [table,setTable]=useState(products)
  const [data , setData] = useState("")
  useEffect(() => {
    setTable(products.filter(elm=>elm.productName.toLowerCase().includes(search.toLowerCase()))) 

  },[search]) 
  function buttonSearch () {
    setTable(products.filter(elm=>elm.productName.toLowerCase()=== search2.toLowerCase() ))

  
  }
  
  return (
    <div className="App">
  <h1>data : {data.title}</h1>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/*">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Contact">Contact</Link>
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=> setSearch(e.target.value)}
                
              />
              <Form.Control
                type="search"
                placeholder="Search2"
                className="me-2"
                aria-label="Search"
                onChange={(e)=> setSearch2(e.target.value)}
                
  />
  <Button onClick={buttonSearch} variant="outline-success">Search</Button>
  <Button  variant="outline-success">send Hello</Button>

            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route index path="/*" element={<Home products={table} />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Blog" element={<Blog />}></Route>
        <Route path="/product/:id" element={<Product products={products} />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
