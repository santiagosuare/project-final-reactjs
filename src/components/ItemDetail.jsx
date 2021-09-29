import React from 'react'
import ItemCount from './ItemCount';
import { useState } from 'react';
import { useCartContext } from '../context/cartContext';


const ItemDetail = ({item}) => {
    const [inputType, setInputType] = useState(true)
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

    const { addToCart } = useCartContext()

    const onAdd = (cant) => {
    
        setCantidadSeleccionada(cant)
        setInputType(false)
        addToCart({item, cant})
    }

   console.log(addToCart)
   console.log(setCantidadSeleccionada)

    return (
        <>
            <h2>ItemDetail</h2>
            <h3>{item.id}</h3>
            <h3>{item.descrption}</h3>

            {inputType ? 
                <ItemCount stock={12} initial={1} onAdd={onAdd}/>
                : 
                <button className="btn btn-outline-primary btn-block"onClick={()=> console.log('/cart')}>Terminar Compra</button>
                }
        </>
    )
}

export default ItemDetail
