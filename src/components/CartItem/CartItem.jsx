import React from "react";
import styles from "./styles.module.css";

const CartItem = ({ item }) => {
    return (
        <div className={styles["cart-detalle"]}>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>Precio unitario: ${item.price}</p>
                <p>Precio total: ${item.price * item.quantity}</p>
                <p>Cantidad: {item.quantity}</p>
            </div>
        </div>
    );
};

export default CartItem;



