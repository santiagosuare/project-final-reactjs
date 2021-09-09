import NavDropdown  from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";

export const ItemListContainer = (props) => {
    return (
        <div>
            <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Catalogo
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{props.catalogo[0]}</Dropdown.Item>
                <Dropdown.Item href="#/action-2">{props.catalogo[1]}</Dropdown.Item>
                <Dropdown.Item href="#/action-3">{props.catalogo[2]}</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default ItemListContainer;