import { useState, createContext, useContext } from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCarList] = useState([])

    const addToCart = (data) => {
        let previousCart = [...cartList]

        if (previousCart.some(i => i.item.id === data.item.id)) {
            previousCart.find(i => i.item.id === data.item.id).cantidad += data.cantidad
            setCarList(previousCart)
        } else {
            setCarList([...cartList, data])
        }
    }

    
    function removeToCart(){
        cartList([])
    }

    
    return(
     
        <cartContext.Provider value={{
            cartList,
            addToCart,
            removeToCart
        }}>
            {children}
        </cartContext.Provider>

    )
    
}