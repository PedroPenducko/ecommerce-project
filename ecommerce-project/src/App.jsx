import { HomePage } from "./pages/home/HomePage";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";
import { CheckoutPage } from "./pages/checkout/CheckoutPage";
import { OrdersPage } from "./pages/order/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";

import "./App.css";

function App() {
    const [cart, setCart] = useState([]);

        const loadCart = async ()=> {
axios.get('/api/cart-items?expand=product')
    .then(response => setCart(response.data));
        }
      useEffect(()=>{
loadCart();
      },[])  
  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
