import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/cartWidget';
import './navBar.css';

const arraydeCategorias = [
    "Niños",
    "Jabón Adultos",
    
];

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Mi Vacunatorio Online</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/">Home</Link>
                        </li>
                        {arraydeCategorias.map((category, index) => (
                            <li className="nav-item" key={index}>
                                <Link className="nav-link" to={`/category/${category}`}>
                                    {category}
                                </Link>
                            </li>
                        ))}
                        <li className="nav-item">
                            <CartWidget />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

