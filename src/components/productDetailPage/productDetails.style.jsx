import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
width: 100vw;
  box-sizing: border-box;
`

export const ProductsDetailsCard = styled.div`
  max-width: 100%;
  display: flex;
  margin-top: 40px;

    img {
        width:100%;
        max-height: 440px;
        object-fit: cover;
        max-width: 480px;
        transition: transform 0.4s ease-in-out;
        border-radius: 3px;
    }

    h1 {
        font-size:36px;
        width: fit-content;
        padding-block: 5px;
    }

    p {
        font-family: 'Roboto', 'Sans-serif';
        font-size: 18px;
    }
`

export const ReviewsColumnsStyles = styled.div`
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4); 
  margin-bottom: 30px;
`

