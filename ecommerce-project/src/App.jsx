import { useState, useEffect, lazy, Suspense } from "react";
import axios from "axios";
import { Routes, Route } from "react-router";

import { HomePage } from "./pages/home/HomePage";

const CheckoutPage = lazy(()=> import("./pages/checkout/CheckoutPage"));
const OrdersPage = lazy(()=>import("./pages/order/OrdersPage"));
const TrackingPage = lazy(()=>import("./pages/TrackingPage"));

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
    <Suspense fallback={<div>loading...</div>}>
      <Routes>
        <Route index element={<HomePage cart={cart} loadCart={loadCart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} loadCart={loadCart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
