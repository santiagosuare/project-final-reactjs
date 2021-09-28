import React from 'react'
import {useState} from 'react'



// const ButtonCount = (handleInput) => {
//     return <button className="btn btn-outline-primary btn-block" onClick={handleInput}>Agregar al Carrito</button>
// }

// const InputCount = () => {
//     return <button className="btn btn-outline-primary btn-block" onClick={() =>console.log('cart')}>Terminar Compra</button>
// }


const ItemCount = ({stock, initial, onAdd}) => {
    
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
        if (count <= (stock -1)) setCount(count +1)        
    }

    const handlerRm =()=>{
        if(count > initial) setCount(count - 1)
    }   

    const handlerOnAdd=()=>{
        onAdd(count)
        setCount(initial)
        
    }

  
 
    return (
        <div className="w-50">
                <button className="btn btn-primary" onClick={handlerRm}>-</button>
                <label>{count}</label>
                <button className="btn btn-primary" onClick={handlerAdd}>+</button><br />
                <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar al Carrito</button>
                
        </div>           
    )
}





export default ItemCount
