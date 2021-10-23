import CartWidget from "./CartWidget";
import Navbar  from "react-bootstrap/NavBar";
import Nav  from "react-bootstrap/Nav";
import NavDropdown  from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";




const NavBar = (props) => {
    
   const {cant} = props
   
    return (
    <>
            <Navbar bg="light" expand="lg">
            <Link to="/">
                <Navbar.Brand ><img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ91P3HmJKfyTbM4XncKKOxllPjK5z70RnRBQ&usqp=CAU" width="30" height="30" className="d-inline-block align-top"/>Clothes Shop</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                    <NavDropdown title="Catalogo" id="navbarScrollingDropdown">
                        <Link  className= "d-flex justify-content-center" to="/categoria/Botines">
                            {props.catalogo[0]}
                        </Link>
                        <NavDropdown.Divider />
                        <br />
                        <Link  className= "d-flex justify-content-center" to="/categoria/Camisetas">
                            {props.catalogo[1]}
                        </Link>
                        <NavDropdown.Divider />
                        <br />
                        <Link  className= "d-flex justify-content-center" to="/categoria/Remeras">
                            {props.catalogo[2]}
                        </Link>
                        <NavDropdown.Divider />
                        <br />
                        <Link  className= "d-flex justify-content-center" to="/categoria/Zapatillas">
                            {props.catalogo[3]}
                        </Link>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <Link to="/Cart"> 
                <CartWidget count={cant}/>
            </Link>
            </Navbar>
            
           
        
            
    </>   
    )

}

export default NavBar;