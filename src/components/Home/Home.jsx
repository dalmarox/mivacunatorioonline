import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const Home = () => {
    return (
        <div className={styles.home}>
            <h1>Bienvenido al Vacunatorio Online</h1>
            <Link to={'/products'} className={styles['b-home']}>
                Ver todos los productos
            </Link>
        </div>
    );
};

export default Home;
