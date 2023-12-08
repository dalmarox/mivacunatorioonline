import React from "react";
import './cartWidget.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { cartQuantity } = useContext(CartContext);

    return (
        <Link to="/cart">
            <button type="button" className="carrito position-relative">
                <i className="bi bi-cart4"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {cartQuantity}
                    <span className="visually-hidden">unread messages</span>
                </span>
            </button>
        </Link>
    );
}

export default CartWidget;



