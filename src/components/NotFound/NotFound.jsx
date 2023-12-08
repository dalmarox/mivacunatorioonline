import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NotFound = () => {
    return (
        <div className={styles.notFoundContainer}>
            <h1 className={styles.notFoundTitle}>Error 404 - La página que buscas no existe</h1>
            <Link to="/" className={styles.notFoundLink}>
                Regresar a la Home
            </Link>
        </div>
    );
};

export default NotFound;
