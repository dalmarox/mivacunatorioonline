import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingItemIndex].quantity += item.quantity;
            setCart(updatedCart);
        } else {

            setCart((prevCart) => [...prevCart, item]);
        }
    };
    const emptyCart = () => {
        setCart([]);
    };

    const totalPrice = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                emptyCart,
                totalPrice,
                cartQuantity,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
