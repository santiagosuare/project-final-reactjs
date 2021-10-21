import { useState } from 'react'
import { useCartContext } from '../context/cartContext'
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { getFirestore } from '../services/getFirebase'
import firebase from 'firebase'
import 'firebase/firestore'





const Cart = () => {

    const [ formData, setFormData ] = useState({
        name: '',
        tel: '',
        email: '',
        email2: ''
    })

    const { cartList, removeItem, clear, precioTotal} = useCartContext()

    function handleOnChange(e) {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    
    const generarOrden = (e) => {

        e.preventDefault()
        let order = {};

        order.date = firebase.firestore.Timestamp.fromDate(new Date());

        order.buyer = formData;
    
        order.total = precioTotal();
    
        order.items = cartList.map(cartItem => {
            const id = cartItem.item.id;
            const title = cartItem.item.title;
            const price = cartItem.item.price * cartItem.cant;
    
            return {id, title, price};
        });
    
        
        const dbData = getFirestore();
        dbData.collection('orders').add(order)
        .then(resp => console.log(resp.id))
        .catch(error => console.log(error))
        .finally(()=>
            setFormData({
                name: '',
                tel: '',
                email: '',
                email2: ''
            })
            // () => clear()
        )

        //ACTUALIZO STOCK
        const itemsUpdate = dbData.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
        )

        const batch = dbData.batch();

        itemsUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cant
                })
            })

            batch.commit().then(resp =>{
                console.log('resultado batch:', resp)
            })
        }

        )



    }
    
    return (
        <div>
            { cartList.length === 0 ?
                    <div>
                        <h2>No hay producto en su carrito</h2>
                        <Link to='/' className='btn btn-outline-primary'>Seguir Comprando</Link>
                    </div>    
                :
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
                    <Button as="input" type="reset" value="Resetear todo el Carro" onClick={() => clear()}/> 
                    <br />
                    <br />
                    <form onChange={handleOnChange} onSubmit={generarOrden}>
                        <input type="text" placeholder= "ingrese el nombre" name="name" value={formData.name}/>
                        <input type="text" placeholder="ingrese el numero de telefono" name="tel" value={formData.tel}/>
                        <input type="text" placeholder="ingrese mail" name="email" value={formData.email}/>
                        <input type="text" placeholder="confirme el mail" name="email2" value={formData.email2} />
                        <button onClick={generarOrden}>Terminar Compra</button>
                    </form>                  
                </center>
                
                
            }
        </div>
    )
}

export default Cart
