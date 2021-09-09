import { AiOutlineShoppingCart } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
        <>
            <a>     
                
                <Button className="mb-1" variant="primary" size="lg" ><AiOutlineShoppingCart /></Button>{}
                
            </a>
        </>
    )
}

export default CartWidget;