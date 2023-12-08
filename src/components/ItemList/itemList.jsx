import { Spin } from 'antd';
import Item from "../Item/item";
import styles from './styles.module.css';

const ItemList = ({ products, loading }) => {
    return (
        <div className={loading ? styles.spinner : styles['container-list']}>
            {loading ? (
                <Spin />
            ) : (
                products && products.length > 0 ? (
                    products.map((prod) => <Item key={prod.id} product={prod} />)
                ) : (
                    <div className={styles['no-products-container']}>
                        <p className={styles['error-message']}>No hay producto disponible.</p>
                    </div>
                )
            )}
        </div>
    );
}

export default ItemList;
