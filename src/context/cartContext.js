import { useState, createContext, useContext } from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({children}) {
    const [cartList, setCarList] = useState([])

    const addToCart = (data) => {
        let previousCart = [...cartList]

        if (previousCart.some(i => i.item.id === data.item.id)) {
            previousCart.find(i => i.item.id === data.item.id).quantity += data.quantity
            setCarList(previousCart)
        } else {
            setCarList([...cartList, data])
        }
    }

    
    function removeToCart(){
        setCarList([])
    }

    console.log(cartList);
    return(
     
        <cartContextProvider value={{
            cartList,
            addToCart,
            removeToCart
        }}>
            {children}
        </cartContextProvider>

    )
    
}