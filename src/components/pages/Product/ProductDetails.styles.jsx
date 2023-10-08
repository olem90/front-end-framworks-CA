import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  width: calc(100vw - 18px);
  box-sizing: border-box;
`

export const ProductsDetailsCard = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  
    img {
        width:100%;
        max-height: 340px;
        object-fit: cover;
        max-width: 380px;
        transition: transform 0.4s ease-in-out;
        border-radius: 3px;
    }

    h1 {
        font-size:36px;
        width: fit-content;
        padding-block: 5px;
        color: #000;
    }

    p {
        font-family: 'Roboto', 'Sans-serif';
        font-size: 19px;
        max-width: 80%;
        color: #000;
    }

    span {
      font-family: 'Roboto', 'Sans-serif';
      color: red;
      margin-top: 22px;
    }
`

export const ReviewsColumnsStyles = styled.div`
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4); 
  margin-bottom: 30px;
`

