import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { ProductDetailsWrapper } from "./productDetails.style";
import { ProductsDetailsCard } from "./productDetails.style";

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

    if (isLoading) {
        return <div>Loading...</div>
    }
    if (isError) {
        return <div>Error loading product</div>
    }
   
    return (
        <ProductDetailsWrapper>
          <div>
            {product ? (
                <ProductsDetailsCard className="productDetails" key={product.id}>
                    <div>
                      <h1>{product.title}</h1>
                      <img src={product.imageUrl}></img>
                    </div>

                    <div className="productDetailsDescription"> 
                      <p>{product.description}</p>
                    </div>        
                </ProductsDetailsCard>
            ) : ( 
                <p>Product not found</p>
            )}
          </div>  
        </ProductDetailsWrapper>
    );
}
export default ProductDetails;

