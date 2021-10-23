import { useParams } from "react-router";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import Spinner  from "react-bootstrap/Spinner";
import { getFirestore } from "../services/getFirebase";


export const ItemListContainer = (props) => {

    

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const {idCategoria} = useParams()

    
    useEffect(() =>{
        if (idCategoria) {
            const dbQuery = getFirestore();

            dbQuery.collection('items').where('categoria', '==', idCategoria).get()
            .then(resp => {
                setItems(resp.docs.map(items => ( {id: items.id, ...items.data() } )) )
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
        } else {
            const dbQuery = getFirestore();

            dbQuery.collection('items').get()
            .then(resp => {
                setItems(resp.docs.map(items => ( {id: items.id, ...items.data() } )) )
            })
            .catch(error => console.log(error))
            .finally(()=> setLoading(false))
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