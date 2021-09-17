import { useState , useEffect } from "react";
import { getItemUno } from "../Utils/Mock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [item, setItem] = useState({});

    useEffect(() => {
        getItemUno
        .then(respuesta => setItem(respuesta))
        
    }, [])
    
    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer
