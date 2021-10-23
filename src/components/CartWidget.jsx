import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from 'react-bootstrap/Button';
import { useCartContext } from "../context/cartContext";

const CartWidget = () => {
    const {iconCart} = useCartContext()

    return (
        <>  
                <Button className="mb-1" variant="primary" size="lg" >{iconCart() === 0 ? ' ': iconCart()}<AiOutlineShoppingCart /></Button>{}

        </>
    )
}

export default CartWidget;