import { useState } from 'react';
import { useCartContext } from '../context/cartContext';
import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton'
import Placeholder from 'react-bootstrap/Placeholder'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { getFirestore } from '../services/getFirebase';
import firebase from 'firebase';
import 'firebase/firestore';
  

const Cart = () => {

    const [show, setShow] = useState(true);
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
        
        setShow(false)
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
        .finally(()=> clear())

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
    


    console.log(cartList)
    console.log(formData.name)

    return (
        <>
            { cartList.length === 0 && formData.name === '' ?
                <div>
                    <Alert variant="info">
                        <Alert.Heading>No hay productos en su Carrito</Alert.Heading>
                        <p>
                        Favor de presionar el boton "Seguir Comprando" para poder 
                        ir a la pagina de compras.
                        </p>
                    </Alert>
                    <Link to='/' className='btn btn-outline-primary'>Seguir Comprando</Link>
                </div>    
                :
                <center>
                    <div>
                        {show ?
                            <div>
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
                                                                    <td><CloseButton onClick={() => removeItem(item.item)} /></td>
                                                            </tr>)}  
                                        <tr>
                                            <td colSpan="6"> <p className= "d-flex justify-content-center">  TOTAL: $ {precioTotal()}</p></td>
                                        </tr>
                                    </tbody>
                                </Table>     
                                <Button as="input" type="reset" value="Resetear todo el Carro" onClick={() => clear()}/> 
                            
                                <Placeholder as="p" animation="glow">
                                    <Placeholder xs={12} />
                                </Placeholder>
                            
                                <h2>Datos Personales</h2>
                                <div className= "d-flex justify-content-center"> 
                                    <Form onChange={handleOnChange} onSubmit={generarOrden}>
                                        
                                            <Row className="mb-3">
                                                <Form.Group as={Col} controlId="formGridName">
                                                    <Form.Label>Nombre</Form.Label>
                                                    <Form.Control type="text" placeholder="Ingrese el Nombre" name="name" value={formData.name} />
                                                </Form.Group>

                                                <Form.Group as={Col} controlId="formGridPhone">
                                                    <Form.Label>Telefono</Form.Label>
                                                    <Form.Control type="phone" placeholder="Numero de Telefono" name="tel" value={formData.tel} />
                                                </Form.Group>
                                            </Row>
                                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Ingrese Email" name="email" value={formData.email} />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formGroupEmail2">
                                                <Form.Label>Confirmacion de Email</Form.Label>
                                                <Form.Control type="email" placeholder="Confirmacion de Email" name="email2" value={formData.email2} />
                                            </Form.Group>
                                    
                                        <Button as="input" type="reset" value="Terminar Compra"  onClick={generarOrden}/>
                                    </Form>    
                                </div>
                            </div>      
                            :
                            <Alert variant="success">
                                <Alert.Heading>Compra Finalizada!!!</Alert.Heading>
                                <p>
                                La compra fue realizada exitosamente.
                                <br />
                                <br />
                                A nombre:<b> {formData.name} </b>.<br />
                                Nos comunicaremos al telefono ingresado: <b>{formData.tel}</b>.<br />
                                La factura fue enviada al correo: <b>{formData.email}</b>.<br />
                                <br />
                                MUCHAS GRACIAS POR COMPRAR EN CLOTHING SHOP
                                </p>
                            </Alert>
                        }
                    </div>        
                </center>
            }
        </>
    )
    
}

export default Cart
