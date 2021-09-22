import React from 'react'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';

const Item = ({item}) => {
    const onAdd = (cant) => {
        console.log(cant)
    }

    return (
        <div>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={item.pictureURL} />
            <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Link to={'/detalle/' + item.id}> 
                    <Button variant="primary">Detalle</Button>
                </Link>
            </Card.Body>
            <ItemCount stock={12} initial={1} onAdd={onAdd}/>
            </Card>
            <br />
        </div>
    )
}

export default Item
