import { useState, createContext, useContext } from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCarList] = useState([])

    const addItem = ({item, cant}) => {
      
        
        const index = cartList.findIndex(i => i.item.id == item.id)

       
        if (index > -1) {
            const oldQy = cartList[index].cant

            cartList.splice(index, 1)
            setCarList([...cartList, {item, cant: cant + oldQy}])
        } else {
            setCarList([...cartList,{item, cant}])            
        }
        
        
        
    }
    
    // REMOVE en Componente Cart
    const removeItem = (item) => {
        // Remove un item del cart por id
        // console.log(item.id)

        // console.log(cartList.filter((prod) => prod.item.id !== item.id))
        const deleteItem = cartList.filter((prod) => prod.item.id !== item.id);
       
       
        // console.log(deleteItem)

        setCarList([...deleteItem]);
    }
    

    const iconCart = () => {
        return cartList.reduce( (acum, valor) => acum + valor.cant, 0)
    }

    const precioTotal = () => {
        return cartList.reduce((acum, valor) => (acum + (valor.cant * valor.item.price)), 0)
    }

    function clear () {
        // Remueve todos los items 
        setCarList([])
    }
    
    return(
     
        <cartContext.Provider value={{
            cartList,
            addItem,
            removeItem,
            clear,
            precioTotal,
            iconCart
        }}>
            {children}
        </cartContext.Provider>

    )
    
}