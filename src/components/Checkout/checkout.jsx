import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/client";
import { Link } from "react-router-dom";
import './Checkout.css';

const Checkout = () => {
    const [orderId, setOrderId] = useState("");
    const [loading, setLoading] = useState(false);
    const [paymentValid, setPaymentValid] = useState(false);

    const { cart, totalPrice, emptyCart } = useContext(CartContext);

    const { register, handleSubmit, reset, formState } = useForm({ mode: 'onChange' });

    const handlePaymentChange = (e) => {
        setPaymentValid(e.target.value !== "");
    };

    const comprar = (data) => {
        setLoading(true);

        const order = {
            cliente: data,
            productos: cart,
            total: totalPrice(),
        };

        const pedidosRef = collection(db, "orders");
        addDoc(pedidosRef, order)
            .then((doc) => {
                setOrderId(doc.id);
                emptyCart();
                reset();
            })
            .finally(() => {
                setLoading(false);
            });
    };

    if (orderId) {
        return (
            <div className="fin">
                <h1>Muchas gracias por su compra!</h1>
                <p>Su número de pedido es: {orderId}</p>
                <Link to="/products" className="volver-tienda-btn">
                    Volver a comprar
                </Link>
            </div>
        );
    }


    return (
        <div className="order">
            <h1>Checkout</h1>
            <div className="form-container">
                <form className="form" onSubmit={handleSubmit(comprar)}>
                    <div className="mb-3">
                        <label htmlFor="nombre" className="form-label">
                            Nombre y apellido
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="nombre"
                            placeholder="Ingresa su nombre y apellido"
                            {...register('nombre', { required: true })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            E-mail
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Ingresa su e-mail"
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="telefono" className="form-label">
                            Teléfono
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="telefono"
                            placeholder="Ingresa su teléfono"
                            {...register('telefono', { required: true })}
                        />
                    </div>
                    <div className="mb-3">
                        <label>Método de pago</label>
                        <select
                            className="form-select"
                            {...register('metodoPago', { required: true })}
                            onChange={handlePaymentChange}
                        >
                            <option value="credit">Tarjeta de crédito</option>
                            <option value="debit">Tarjeta de débito</option>
                            <option value="transfer">Transferencia bancaria</option>
                        </select>
                    </div>

                    <button type="submit" className="btn-buy" disabled={!formState.isValid || !paymentValid || loading}>
                        Comprar
                    </button>
                </form>

                {loading && (
                    <p className="loading-message">Cargando numero de orden...</p>
                )}
            </div>
        </div>
    );
};

export default Checkout;


