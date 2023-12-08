import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, totalPrice, emptyCart, setCart } = useContext(CartContext);

    const handleEmptyCart = () => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "¿Deseas vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Sí, vaciar carrito",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                emptyCart();
                Swal.fire("El carrito ha sido vaciado.", "", "success");
            }
        });
    };

    const onUpdateQuantity = (item, newQuantity) => {
        setCart((prevCart) => {
            return prevCart.map((cartItem) =>
                cartItem === item ? { ...cartItem, quantity: newQuantity } : cartItem
            );
        });
    };

    return (
        <div className={styles.cart}>
            <h1 className={styles.title}>Detalle de la compra</h1>
            <div className={styles.productsContainer}>
                {cart.map((item) => (
                    <CartItem key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} />
                ))}
            </div>
            {cart.length > 0 ? (
                <>
                    <h2 className={styles.totalPrice}>Precio total: ${totalPrice()}</h2>
                    <div className={styles.buttonsContainer}>
                        <button className={styles.emptyButton} onClick={handleEmptyCart}>Vaciar carrito</button>
                        <Link className={styles.checkoutLink} to="/checkout">Finalizar compra</Link>
                    </div>
                </>
            ) : (
                <h2 className={styles.emptyCartMessage}>El carrito está vacío</h2>
            )}
        </div>
    );
};

export default Cart;
