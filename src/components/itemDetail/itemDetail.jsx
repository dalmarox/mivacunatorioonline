import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/itemCount";
import Swal from "sweetalert2";
import styles from './styles.module.css';

const ItemDetail = ({ product, loading }) => {
    const { addToCart } = useContext(CartContext);
    const [selectedQuantity, setSelectedQuantity] = useState(1);

    const handleQuantityChange = (quantity) => {
        setSelectedQuantity(quantity);
    };

    const handleAddToCart = () => {
        const cartItem = {
            id: product?.id,
            title: product?.title,
            price: product?.price,
            image: product?.image,
            quantity: selectedQuantity
        };

        // Obtener el carrito actual del localStorage (si existe)
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

        // Agregar el nuevo item al carrito
        const updatedCart = [...existingCart, cartItem];

        // Almacenar el carrito actualizado en el localStorage
        localStorage.setItem('cart', JSON.stringify(updatedCart));

        // Mostrar el mensaje de éxito con SweetAlert
        Swal.fire({
            icon: "success",
            title: "Producto(s) agregado(s) al carrito",
            text: `Has agregado ${selectedQuantity} producto(s) al carrito.`,
            showConfirmButton: false,
            timer: 1500
        });

        addToCart(cartItem);
    };

    return (
        <div className={styles.cardProductContainer}>
            {loading ? (
                <p className={styles.loading}>Cargando...</p>
            ) : (
                <div className={styles.productDetailContainer}>
                    {product && product.stock > 0 ? (
                        <>
                            <h2 className={styles.productTitle}>{product.title}</h2>
                            <div className={styles.productImage}>
                                {product.image && (
                                    <img src={product.image} alt={product.title} />
                                )}
                            </div>
                            <div className={styles.productDescription}>
                                <p>{product.description}</p>
                                <p className={styles.productPrice}>Precio: ${product.price}</p>
                                <ItemCount stock={product.stock} onQuantityChange={handleQuantityChange} />
                                <button
                                    onClick={handleAddToCart}
                                    className={styles.addToCartButton}
                                >
                                    Añadir al carrito
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className={styles.outOfStockMessage}>No hay Producto disponible</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default ItemDetail;
