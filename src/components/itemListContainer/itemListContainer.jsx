import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/itemList'
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../firebase/client"


const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const { id } = useParams()



    useEffect(() => {
        const productsRef = id ? query(collection(db, "products"), where("categoryId", "==", id)) : collection(db, "products")

        getDocs(productsRef)
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
            })
            .catch(e => console.log(e))
            .finally(() => setLoading(false))
    }, [id])

    return (
        <ItemList products={products} loading={loading} />

    );
}

export default ItemListContainer;