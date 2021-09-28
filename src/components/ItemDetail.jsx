import React from 'react'
import ItemCount from './ItemCount';
import { useState } from 'react';
import { useCartContext } from '../context/cartContext';


const ItemDetail = ({item}) => {
    const [inputType, setInputType] = useState(true)
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

    const onAdd = (cant) => {
        console.log(cant)
        setCantidadSeleccionada(cant)
        console.log(cantidadSeleccionada)
        setInputType(false)

    }

    const {addToCart} = useCartContext()
    console.log(addToCart);

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
