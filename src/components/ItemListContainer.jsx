// import Dropdown from "react-bootstrap/Dropdown";
// import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { useState, useEffect } from "react";
import { getItem } from "../Utils/Mock"

import ItemList from "./ItemList";
// import ItemCount from "./ItemCount";

export const ItemListContainer = (props) => {

    

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    // const onAdd = (cant) => {
    //     console.log(cant)
    // }

    useEffect(() =>{

        if (idCategoria) {
            getItem
            .then(respuesta =>{
                setItems(respuesta.filter( prod => prod.categoria === idCategoria))
            })
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
            
        } else {
            getItem
            .then(respuesta =>{
                setItems(respuesta)
            })
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
        }
    }, [idCategoria])

    return (
        <div>
            {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Catalogo
            </Dropdown.Toggle>

            <Dropdown.Menu>
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
            </Dropdown.Menu>
            </Dropdown> */}
            { loading ? <h2>Cargando....</h2> : <ItemList items={items}/>}
            
            {/* <ItemCount stock={12} initial={1} onAdd={onAdd}/> */}
        </div>
    )
}

export default ItemListContainer;