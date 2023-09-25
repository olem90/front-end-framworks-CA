
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import ProductCard from "./components/ProductCard/productCard.jsx";
import styles from './styles.scss';
//import { ProductCardStyle } from "./components/ProductCard/productCard.styles.jsx";
import ProductDetails from "./components/productDetailPage/productDetails.jsx";

function App() {
  return (
      <div>
        <Layout>         
          <Routes>
          
            <Route path="/home" element={<ProductCard />} />
            <Route path="product/:id" element={<ProductDetails />} />
          
          </Routes>  
        </Layout>   
      </div>    
  );
}
export default App;

/*
import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';

function Home() {
  return <div>Home</div>;
}

function Post() {
  let params = useParams();
  return <div>Individual Post ID: {params.id}</div>;
}

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post/1">Post with ID: 1</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
*/