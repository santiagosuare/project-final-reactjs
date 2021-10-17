import React from 'react'
import { useCartContext } from '../context/cartContext'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


const Cart = () => {

    const { cartList, removeItem, clear, precioTotal} = useCartContext()

    return (
        <div>
            <center>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Producto</th>
                            <th>Vista Previa</th>
                            <th>Precio ARG</th>
                            <th>Cantidad</th>
                            <th>Eliminar Producto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartList.map(item => <tr key={item.item.id}>
                                                
                                                    <td>{item.item.id}</td>
                                                    <td>{item.item.title}</td>
                                                    <td> <img src={item.item.pictureURL} alt="#" width="200" height="200"/> </td>
                                                    <td>{item.item.price}</td>
                                                    <td>{item.cant}</td>
                                                    <td><button onClick={() => removeItem(item.item)}>X</button></td>
                                                    <th></th>
                                                
                                            </tr>)}  
                        <tr>
                            <td colSpan="6"> <p className= "d-flex justify-content-center">  TOTAL: $ {precioTotal()}</p></td>
                        </tr>
                    </tbody>
                </Table>                        
            </center>
            <Button as="input" type="reset" value="Resetear todo el Carro" onClick={() => clear()}/>
        </div>
    )
}

export default Cart
