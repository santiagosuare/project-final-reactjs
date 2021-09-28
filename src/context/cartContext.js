import { useState, createContext, useContext } from 'react';


const cartContext = createContext([]);

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider({children}) {
    const [carList, setCarList] = useState([])

    function addToCart(item) {
        setCarList([...carList, item])
    }
    
    function removeToCart(item){
        setCarList([])
    }

    return(
        <cartContextProvider value={{
            carList,
            addToCart,
            removeToCart
        }}>
            {children}
        </cartContextProvider>

    )
    
}