import React, { useState } from "react";
import "./itemCount.css";

const ItemCount = ({ stock, onQuantityChange }) => {
    const [counter, setCounter] = useState(1);

    const resta = () => {
        if (counter > 1) {
            setCounter(counter - 1);
            onQuantityChange(counter - 1);
        }
    };

    const suma = () => {
        if (counter < stock) {
            setCounter(counter + 1);
            onQuantityChange(counter + 1);
        }
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-center align-items-center">
                <button onClick={resta} className="btn">
                    -
                </button>
                <p className="mx-2 numero">{counter}</p>
                <button onClick={suma} className="btn">
                    +
                </button>
            </div>
            <p className="stock-info">Stock disponible: {stock}</p>
        </div>
    );
};

export default ItemCount;
