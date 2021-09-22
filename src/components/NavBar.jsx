import CartWidget from "./CartWidget";
import Navbar  from "react-bootstrap/NavBar";
import Nav  from "react-bootstrap/Nav";
import NavDropdown  from "react-bootstrap/NavDropdown";
// import Form  from "react-bootstrap/Form";
// import FormControl  from "react-bootstrap/FormControl";
// import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";




const NavBar = (props) => {

   
    
    return (
    <>
            <Navbar bg="light" expand="lg">
            <Link exact to="/">
                <Navbar.Brand >Clothes Shop</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    
                    <Nav.Link href="#action2">Nosotros</Nav.Link>
                    <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
                        <Link exact to="/categoria/Botines">
                            {props.catalogo[0]}
                        </Link>
                        <br />
                        <Link exact to="/categoria/Camisetas">
                            {props.catalogo[1]}
                        </Link>
                        <br />
                        <Link exact to="/categoria/Remeras">
                            {props.catalogo[2]}
                        </Link>
                        <br />
                        <Link exact to="/categoria/Zapatillas">
                            {props.catalogo[3]}
                        </Link>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#" disabled>
                        Link
                    </Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form> */}
            </Navbar.Collapse>
            <Link to="/" exact> 
                <CartWidget />
            </Link>
            </Navbar>
            
           
        
            
    </>   
    )

}

export default NavBar;