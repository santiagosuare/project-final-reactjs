// import Dropdown from "react-bootstrap/Dropdown";
// import { Link } from "react-router-dom";
import { useParams } from "react-router";

import { useState, useEffect } from "react";
import { getItem } from "../Utils/Mock"

import ItemList from "./ItemList";
import Spinner  from "react-bootstrap/Spinner";
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
            
            { loading ? 
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            
            : <ItemList items={items}/>}
            
        </div>
    )
}

export default ItemListContainer;