import React from 'react'
import Item from './Item'

const ItemList = ({items}) => {
    
    return (
        <>
        <div className = "container d-flex justify-content-center aling-items-center h-180">
            <div className = "row">
                {items.map(item=> 
                                (
                                <div className = "col-md-2" key={item.id}>
                                    <Item item={item} />
                                </div>
                                )
                            )}
            </div>
        </div>
        </>
    )
}

export default ItemList
