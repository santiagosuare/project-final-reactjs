import { useState , useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "./ItemDetail";
import { getFirestore } from "../services/getFirebase";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [item, setItem] = useState([])


    useEffect(() =>{
        if (id) {
            const dbQuery = getFirestore()

            dbQuery.collection('items').doc(id).get()
            .then(resp => 
                setItem({id: resp.id, ...resp.data()})
            )
            .catch(
                error => console.log(error)
            )
            
        } else {
            const dbQuery = getFirestore()

            dbQuery.collection('items').doc(id).get()
            .then(resp => 
                setItem({resp})
            )
            .catch(
                error => console.log(error)
            )
        }
    }, [id])

    
    return (
        <>
            <ItemDetail item={item}/>
        </>
    )
}

export default ItemDetailContainer
