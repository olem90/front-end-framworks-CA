import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from "../../../contexts/CartContext";
import { SuccessMessage } from './CheckoutSuccess.styles';
import { SuccessMessageWrapper } from './CheckoutSuccess.styles';
//import { CheckoutSuccessButton } from '../../Button/Button.styles';

const CheckoutSuccess = () => {
    const [,dispatch] = useCart();

    useEffect(() => {
        dispatch({type: 'clearCart'})
    }, [dispatch]);

    return (
        <SuccessMessageWrapper>
          <SuccessMessage>
              <p> 
                Thank you for your purchase! 
                Your order has been placed and will arrive in 3-5 business days. 
              </p>
              <Link to="/">Back to Store</Link>
          </SuccessMessage>     
        </SuccessMessageWrapper>
    )
}
export default CheckoutSuccess;