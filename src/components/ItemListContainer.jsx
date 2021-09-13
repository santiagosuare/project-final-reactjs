import Dropdown from "react-bootstrap/Dropdown";
import ItemCount from "./ItemCount";

export const ItemListContainer = (props) => {

    const onAdd = (cant) => {
        console.log(cant)
    }

    
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
            <ItemCount stock={12} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;