import React, { useReducer, createContext, useContext} from "react";

export const CartContext = createContext();

export const initialState = { cart: [], total: 0};

export function reducer(state, action) {
    let newTotal;
    let cart;
    let productIndex;

    switch(action.type) {
        case 'addProduct':
            cart = [...state.cart];
            productIndex = cart.findIndex(
                (product) => product.id === action.payload.id,
            );
            if ( productIndex === -1 ) {
                cart.push({ ...action.payload, quantity: 1 });
            } else {
                cart = [
                    ...cart.slice(0, productIndex),
                    {...cart[productIndex], quantity: cart[productIndex].quantity + 1},
                    ...cart.slice(productIndex + 1),
                ];
            }

            newTotal = cart.reduce((currentTotal, product) => {
                currentTotal += product.discountedPrice * product.quantity;
                return currentTotal;
            }, 0);
            return {...state, cart: cart, total: newTotal};

            case 'removeProduct':
                cart = [...state.cart];
                productIndex = cart.findIndex(
                    (product) => product.id === action.payload.id,
                );
                if (productIndex !== -1) {
                    cart = [
                        ...cart.slice(0, productIndex),
                        ...cart.slice(productIndex + 1),
                    ];                  
                }

                newTotal = cart.reduce((currentTotal, product) => {
                    currentTotal += product.discountedPrice * product.quantity;
                    return currentTotal;
                }, 0);
                return {...state, cart: cart, total: newTotal};

            case 'clearCart':
                return {cart: [], total: 0};

            case'increaseQuantityBy1':
                cart = [...state.cart];
                productIndex = cart.findIndex(
                    (product) => product.id === action.payload.id,
                );

                if ( productIndex !== -1) {
                    cart = [
                        ...cart.slice(0, productIndex),
                        {...cart[productIndex], quantity: cart[productIndex].quantity + 1},
                        ...cart.slice(productIndex + 1)
                    ];
                }

                newTotal = cart.reduce((currentTotal, product) => {
                    currentTotal += product.discountedPrice * product.quantity;
                    return currentTotal;
                }, 0);
                return {...state, cart: cart, total: newTotal};

                case'decreaseQuantityBy1':
                cart = [...state.cart];
                productIndex = cart.findIndex(
                    (product) => product.id === action.payload.id,
                );

                if ( productIndex !== -1) {
                    if ( cart[productIndex].quantity > 1 ) {
                        cart = [
                            ...cart.slice(0, productIndex),
                            {...cart[productIndex], quantity: cart[productIndex].quantity - 1},
                            ...cart.slice(productIndex + 1)
                        ];
                    }           
                }

                newTotal = cart.reduce((currentTotal, product) => {
                    currentTotal += product.discountedPrice * product.quantity;
                    return currentTotal;
                }, 0);
                return {...state, cart: cart, total: newTotal};

                default:
                  return state;
   }
}

export function CartProvider( {children} ) {
    const [state, dispatch] = useReducer( reducer, initialState );
    console.log("Current cart state: ", state);

    return (
        <CartContext.Provider value={[state, dispatch]}>
            { children }
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    const [state, dispatch] = context;
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return [state, dispatch];
}

