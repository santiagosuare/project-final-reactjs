import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useState} from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const handlerAdd =()=>{
        setCount(count +1)        
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
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/bd61ea707bf5483d804dac0900e3c37f_9366/Remera_Must_Haves_Badge_of_Sport_Granate_GC6967_21_model.jpg" />
            <Card.Body>
                <Card.Title>Remera Adidas</Card.Title>
                <Card.Text>
                Una remera
                </Card.Text>
                <button className="btn btn-primary" onClick={handlerAdd}>+</button>
                <label>{count}</label>
                <button className="btn btn-primary" onClick={handlerRm}>-</button><br />
                <button className="btn btn-outline-primary btn-block" onClick={handlerOnAdd}>Agregar</button>
            </Card.Body>
            </Card>
        </div>           
    )
}





export default ItemCount
