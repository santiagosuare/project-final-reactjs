import Dropdown from "react-bootstrap/Dropdown";

import { useState, useEffect } from "react";
import { getItem } from "../Utils/Mock"

import ItemList from "./ItemList";
import ItemCount from "./ItemCount";

export const ItemListContainer = (props) => {

    

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    const onAdd = (cant) => {
        console.log(cant)
    }

    useEffect(() =>{
        getItem
        .then(respuesta =>{
            setItems(respuesta)
        })
        .catch(error => console.log(error))
        .finally(()=>setLoading(false))

    }, [])


    
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
            { loading ? <h2>Cargando....</h2> : <ItemList items={items}/>}
            
            <ItemCount stock={12} initial={1} onAdd={onAdd}/>
        </div>
    )
}

export default ItemListContainer;