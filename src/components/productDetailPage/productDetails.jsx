import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ProductDetailsWrapper } from "./productDetails.style";
import { ProductsDetailsCard } from "./productDetails.style";
import { calculateDiscount } from "../ProductCard/productCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ReviewsColumnsStyles } from "./productDetails.style";
import { AddToCartButton } from "../Button/Button.styles";



function ProductDetails() {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const { id } = useParams();
    const productUrl = `https://api.noroff.dev/api/v1/online-shop/${id}`; 

    useEffect(() => {
        async function getProductDetails() {
            try {
                setIsError(false);
                setIsLoading(true);
                const response = await fetch(productUrl);
                const json = await response.json();
                setProduct(json);
                console.log(json)
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getProductDetails();
    }, [id]);

    /*function RenderReviews() {
       return (
        <div className="product-details-review">
           {product && product.reviews && product.reviews.length > 0 ? <h2>Reviews</h2> : null}
            {product && product.reviews ? (
                product.reviews.map((review) => {
                    let stars = [];
                    for( let i= 0; i < review.rating; i++) {
                        stars.push(<FontAwesomeIcon className='star' icon={faStar} key={i} />);
                    }
                    return (
                        <ReviewsColumnsStyles key={review.id}>
                            <div>
                                <strong className="username-reviews">{review.username} </strong>
                                {stars}
                            </div>
                            <p>{review.description}</p>
                        </ReviewsColumnsStyles>
                    );
                } )
            ): null}
        </div>
       )
    }
   */


    function RenderReviews() {
        return (
            <div className="product-details-review">
                {product && product.reviews && product.reviews.length > 0 ? (
                    <div className="reviews-container">
                        <h2>Reviews</h2>
                        {product.reviews.map((review, index) => {
                            let stars = [];
                            for (let i = 0; i < review.rating; i++) {
                                stars.push(<FontAwesomeIcon className='star' icon={faStar} key={i} />);
                            }
                            return (
                                <ReviewsColumnsStyles key={review.id}>
                                    <div>
                                        <strong className="username-reviews">{review.username}</strong>
                                        {stars}
                                    </div>
                                    <p>{review.description}</p>
                                </ReviewsColumnsStyles>
                            );
                        })}
                    </div>
                ) : null}
            </div>
        )
    }



    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error loading product</div>
    }
   
    return (
        <ProductDetailsWrapper>
          <div className="productsDetails-container">
            <div className="productsDetails-container-wrapper">
              {product ? (
                  <ProductsDetailsCard  key={product.id}>
                      <div className="productDetails-img-container">
                        <h1>{product.title}</h1>
                        <img src={product.imageUrl}></img>
                        <AddToCartButton>ADD TO CART</AddToCartButton>
                      </div>
                      <div className="productDetailsDescription">
                        <p>{product.description}</p>
                      
                        <div>{product.price > product.discountedPrice ? (
                          <div className="productDetailsPrice">
                              <p><b>Price: ${product.discountedPrice}</b></p>
                              <p className="productDetails-original-price">{product.price}</p>
                              <p className="ProductDetails-DiscountPercent">{calculateDiscount(product.price, product.discountedPrice)}%</p> 
                          </div>
                        ) : (
                          <p><b>Price: ${product.price}</b></p>

                        )}
                        </div>
                    
                      </div>
                  </ProductsDetailsCard>
              ) : ( 
                  <p>Product not found</p>
              )}
              <RenderReviews />
            </div>  
          </div>

            
          
          </ProductDetailsWrapper>
      );
  }
export default ProductDetails;

