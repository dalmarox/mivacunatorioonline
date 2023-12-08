import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Item = ({ product }) => {
    return (
        <div className={styles.cards}>
            <img className={styles.cardImg} src={product.image} alt={product.title} />
            <div>
                <h4 className={styles.cardTitle}>{product.title}</h4>
                <p className={styles.cardPrice}>Precio: ${product.price}</p>
                <Link to={`/item/${product.id}`}>
                    <button className={styles.boton}>Comprar</button>
                </Link>
            </div>
        </div>
    );
}

export default Item;
