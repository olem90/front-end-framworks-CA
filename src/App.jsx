
import React from "react";
import { Route, Routes} from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import './styles.scss';
import ProductDetails from "./components/pages/Product/productDetails.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import Home from "./components/pages/Home/Home.jsx";
import Checkout from "./components/pages/Checkout/Checkout.jsx";
import CheckoutSuccess from "./components/pages/CheckoutSuccess/CheckoutSuccess.jsx";
import Contact from "./components/pages/Contact/Contact.jsx";

function App() {
  
  return (
    <CartProvider>
      <div className="app-wrapper">
        <Layout>         
          <Routes>
            <Route path="/"  element={<Home />} />
            <Route path="/home"  element={<Home />} />
            <Route path="product/:id" element={<ProductDetails />} /> 
            <Route path="/checkout" element={<Checkout />} /> 
            <Route path="/checkout-success" element={<CheckoutSuccess />} />  
            <Route path="/contact" element={<Contact />} /> 
          </Routes>  
        </Layout>   
      </div>  
    </CartProvider>
  );
}
export default App;