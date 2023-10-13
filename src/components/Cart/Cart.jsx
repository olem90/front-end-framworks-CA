import React, { useState } from "react";
import { useCart } from "../../contexts/CartContext.jsx";
import { CartStyles } from "./Cart.styles.jsx";
import { CartProductTemplate } from "./Cart.styles.jsx";
import { ProductQuantityButtons } from "./Cart.styles.jsx";
import { CheckoutButton } from "../Button/Button.styles.jsx";
import { BackToStoreButton } from "../Button/Button.styles.jsx";

function Cart() { 
    const [state, dispatch] = useCart();

    function calculateSavings(price, discountedPrice) {
        return (price - discountedPrice);
    }

    const totalSavings = state.cart.reduce((total, product) => {
        return total + (parseFloat(calculateSavings(product.price, product.discountedPrice)) * product.quantity);
    }, 0).toFixed(2);

    const removeProduct = (product) => {
        const userConfirmation = window.confirm("Are you sure you wanna delete this product?");
        if ( userConfirmation ) {
            dispatch({ type: 'removeProduct', payload: product})
        }       
    };

    const increaseQuantity = (product) => {
        dispatch({ type: 'increaseQuantityBy1', payload: product })
    };

    const decreaseQuantity = (product) => {
        dispatch({ type: 'decreaseQuantityBy1', payload: product })
    };

    const handleCheckout = () => {
        window.location.href = '/checkout-success';
    };

    return(
        <div>
            <CartStyles>
                <div className={state.cart.length === 0 ? 'empty-cart-wrapper' : 'cart-wrapper'}>
                    <h1>Your Cart</h1>
                    {state.cart.length === 0 ? (
                        <>
                          <p className="empty-cart-text">Your cart is empty</p>
                          <BackToStoreButton className="baack" 
                          onClick={() => window.location.href = "/home"}>Back to Store
                          </BackToStoreButton>
                        </>
                    ) : (
                        state.cart.map((product) => (
                            <div className="cartProductTemplateContainer" key={product.id}>
                                <CartProductTemplate>
                                    <div className="cartProductImage">
                                        <img src={product.imageUrl} alt={product.title} />
                                    </div>
    
                                    <div className="cart-product-text">
                                        <h2 className="cartProductTitle">{product.title}</h2>
                                        <p>Quantity: {product.quantity}</p>
                                        <p>Price: ${product.discountedPrice}</p>
                                    </div>
    
                                    <ProductQuantityButtons>
                                        <button id="decreaseQuantityBtn" onClick={() => decreaseQuantity(product)} >-</button>
                                        <button onClick={() => increaseQuantity(product)}>+</button>
                                    </ProductQuantityButtons>
                                    <button onClick={() => removeProduct(product)} className="removeItem-button">x</button>
                                </CartProductTemplate>
                                <hr />
                            </div>      
                        ))
                    )} 

                    <div className={state.cart.length === 0 ? 'empty-cart' : 'total-savings'}>
                        <span>
                            Total Savings: ${totalSavings}
                        </span>
                    </div>

                    <div>
                         
                    </div>

                    <h2 className={state.cart.length === 0 ? 'empty-cart' : 'cartTotal'}>
                      Total: ${parseFloat(state.total.toFixed(2))}
                    </h2>
                    <CheckoutButton className={state.cart.length === 0 ? 'empty-cart' : ''} 
                      to="/checkoutSuccess" 
                      onClick={handleCheckout} 
                      disabled={state.cart.length === 0}>
                        Checkout
                    </CheckoutButton>
                </div>      
            </CartStyles>
        </div>
    )
}

export default Cart;



