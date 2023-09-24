import React, { useEffect, useState } from 'react';
import { ProductsWrapper } from './productCard.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Button } from '../Button/Button.styles';
import { ProductCardStyle } from './productCard.styles';
import SearchBar from '../SearchBar/SearchBar';
import { useNavigate } from 'react-router-dom';

const url = 'https://api.noroff.dev/api/v1/online-shop';

function calculateDiscount(price, discountedPrice) {

    return ((price - discountedPrice) / price * 100).toFixed(1);

}

function ProductCard () {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const navigate = useNavigate();

    const goToProductPage = (id) => {
      navigate(`/product/${id}`);
    };
    
    useEffect(() => {
        async function getProducts() {
            try {
                setIsError(false);
                setIsLoading(true);

                const response = await fetch(url);
                const json = await response.json();
                console.log(json);

                setProducts(json);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getProducts();
    }, []);
        

    if (isLoading) {
        return <div>Loading products...</div>
    }
    if (isError) {
        return <div>Error loading products</div>
    }

    return (
        <div>
          <SearchBar products={products} />
          <ProductsWrapper> 
            {products.map((product) => (
                <ProductCardStyle className='product-card' key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.imageUrl}></img>
                    <p>{product.description}</p>
                    {product.price > product.discountedPrice ? (                      
                        <div>                        
                            <b>Price: ${product.discountedPrice}</b>
                            <span className='productPrice'>${product.price}</span>
                            <span className='discountPercent'>
                                {`${calculateDiscount(product.price, product.discountedPrice)}%`}
                            </span>
                        </div>
                                                
                    ) : (
                        <b>Price: ${product.price}</b>
                    )}
                    <p>{product.rating} <FontAwesomeIcon className='star' icon={faStar}/></p>
                    <Button onClick={() => goToProductPage(product.id)} className='viewProductBtn'>View product</Button>
                </ProductCardStyle>
            ))}           
          </ProductsWrapper>
        </div>
    )
}
export default ProductCard;