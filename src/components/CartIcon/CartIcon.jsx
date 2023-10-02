import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../../contexts/CartContext';

export const CartIcon = () => {
    const [state] = useCart();
    const totalProducts = state.cart.reduce((total, product) => total + product.quantity, 0);

    return (
        <div>
            <FontAwesomeIcon icon={faShoppingCart}/> 
            <span className="cart-text"> Cart</span>
            <span> ({totalProducts})</span>
        </div>
    )
}