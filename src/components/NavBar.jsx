import CartWidget from "./CartWidget";
import Navbar  from "react-bootstrap/NavBar";
import Nav  from "react-bootstrap/Nav";
import NavDropdown  from "react-bootstrap/NavDropdown";
// import Form  from "react-bootstrap/Form";
// import FormControl  from "react-bootstrap/FormControl";
// import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cartContext";




const NavBar = (props) => {
    
   const {cant} = props
   const {iconCart} = useCartContext()
   
    return (
    <>
            <Navbar bg="light" expand="lg">
            <Link to="/">
                <Navbar.Brand >Clothes Shop</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
                        <Link  to="/categoria/Botines">
                            {props.catalogo[0]}
                        </Link>
                        <br />
                        <Link  to="/categoria/Camisetas">
                            {props.catalogo[1]}
                        </Link>
                        <br />
                        <Link  to="/categoria/Remeras">
                            {props.catalogo[2]}
                        </Link>
                        <br />
                        <Link  to="/categoria/Zapatillas">
                            {props.catalogo[3]}
                        </Link>
                        <NavDropdown.Divider />
                       <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav.Link to="/Cart"> 
                {iconCart()}
                <CartWidget count={cant}/>
                
            </Nav.Link>
            </Navbar>
            
           
        
            
    </>   
    )

}

export default NavBar;