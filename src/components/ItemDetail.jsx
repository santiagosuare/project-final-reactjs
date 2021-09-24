import React from 'react'
import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({item}) => {
    const [cantidadSeleccionada, setCantidadSeleccionada] = useState(0)

    const onAdd = (cant) => {
        console.log(cant)
        setCantidadSeleccionada(cant)
    }


    return (
        <>
            <h2>ItemDetail</h2>
            <h3>{item.id}</h3>
            <h3>{item.descrption}</h3>
            <ItemCount stock={12} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default ItemDetail
