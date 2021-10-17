import { useState , useEffect } from "react";
import { getItem } from "../Utils/Mock";
import { useParams } from "react-router";

import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    const [item, setItem] = useState([])


    useEffect(() =>{

        if (id) {
            getItem
            .then(respuesta =>{
                setItem(respuesta.find( prod => prod.id == id))
            })
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
            
        } else {
            getItem
            .then(respuesta =>{
                setItem(respuesta)
            })
            .catch(error => console.log(error))
            .finally(()=>setLoading(false))
        }
    }, [id])

    console.log(loading)
    
    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer
