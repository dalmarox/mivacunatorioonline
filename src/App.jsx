import './App.css'
import NavBar from './components/NavBar/navBar'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/checkout'
import NotFound from './components/NotFound/NotFound';
import { Routes, Route, BrowserRouter } from 'react-router-dom';


function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path="/products" element={<ItemListContainer />} />
                    <Route exact path='/category/:id' element={<ItemListContainer />} />
                    <Route exact path='/item/:id' element={<ItemDetailContainer />} />
                    <Route exact path='/*' element={<NotFound />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/checkout' element={<Checkout />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}

export default App;



