import CartWidget from "./CartWidget";
import Navbar  from "react-bootstrap/NavBar";
import Nav  from "react-bootstrap/Nav";
import NavDropdown  from "react-bootstrap/NavDropdown";
import Form  from "react-bootstrap/Form";
import FormControl  from "react-bootstrap/FormControl";
import Button  from "react-bootstrap/Button";



const NavBar = () => {
    
    return (
    <>
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#">Shop Barber</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                className="mr-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
                >
                <Nav.Link href="#action1">Inicio</Nav.Link>
                <Nav.Link href="#action2">Nosotros</Nav.Link>
                <NavDropdown title="Link" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#" disabled>
                    Link
                </Nav.Link>
                </Nav>
                <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
            </Navbar.Collapse>
            <CartWidget />
            </Navbar>
           
        
            
    </>   
    )

}

export default NavBar;