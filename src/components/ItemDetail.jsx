import React from 'react'

const ItemDetail = ({item}) => {
    return (
        <>
            <h2>ItemDetail</h2>
            <h3>{item.id}</h3>
            <h3>{item.descrption}</h3>
        </>
    )
}

export default ItemDetail
