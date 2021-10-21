import { useState , useEffect } from "react";
// import { getItem } from "../Utils/Mock";
import { useParams } from "react-router";

import ItemDetail from "./ItemDetail";
import { getFirestore } from "../services/getFirebase";

const ItemDetailContainer = () => {

    const {id} = useParams()
    const [loading, setLoading] = useState(true)

    const [item, setItem] = useState([])


    useEffect(() =>{
        if (id) {
            const dbQuery = getFirestore()

            dbQuery.collection('items').doc(id).get()
            .then(resp => 
                // console.log({id: resp.id, ...resp.data()})
                setItem({id: resp.id, ...resp.data()})
            )
            .catch(
                error => console.log(error)
            )
            .finally(
                ()=> setLoading(false)
            )
        } else {
            const dbQuery = getFirestore()

            dbQuery.collection('items').doc(id).get()
            .then(resp => 
                // console.log({id: resp.id, ...resp.data()})
                setItem({resp})
            )
            .catch(
                error => console.log(error)
            )
            .finally(
                ()=> setLoading(false)
            )
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
