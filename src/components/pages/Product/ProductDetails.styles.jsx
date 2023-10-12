import styled from "styled-components";

export const ProductDetailsWrapper = styled.div`
  box-sizing: border-box;
`

export const ProductsDetailsCard = styled.div`
  width: 90%;
  display: flex;
  margin-top: 40px;
  box-sizing: border-box;
  max-width: 1000px;
  margin-inline: auto;
  
    img {
        min-width: 100%;
        max-height: 340px;
        object-fit: cover;
        max-width: 360px;
        border-radius: 3px;
    }

    h1 {
        font-size:36px;
        width: fit-content;
        padding-block: 5px;
        color: #000;
        white-space: nowrap;
    }

    p, b {
        font-family: 'Roboto', 'Sans-serif';
        font-size: 19px;
        max-width: 100%;
        color: #000;
        margin-left: 15px;
    }

    span {
      font-family: 'Roboto', 'Sans-serif';
      color: red;
      margin-top: 22px;
    }

    @media(max-width: 1200px) {
      span, p, b {
        font-size: 17px;
        
        margin-top: 20px;
      }

    @media(max-width: 899px) {
      width: 60%;
      flex-direction: column;
      margin-inline: auto;

      h1 {
        margin-left: 15px;
        font-size: 26px;
      }


      span, p, b {
        font-size: 20px;
        margin-left: 7px;
       
      }

      img {
        margin-inline: auto;
        max-width: 94%;
        min-width: 94%;
        max-height: 300px;
      }
    }

    @media(max-width: 699px) {
      min-width: 70%;

      span, p, b {
        font-size: 18px;
        margin: 5px 20px 0 6px;
        padding-block: 10px;
      }

      h1 {
        font-size: 26px;
      }
      
      img {
        max-height: 280px;
      }
    }

    @media(max-width: 599px) {
      min-width: 70%;
    }

    @media(max-width: 499px) {
      min-width: 90%;
      
      h1 {
        font-size: 22px;
      }

      span, p, b {
        font-size: 16px;
      }
    }

    @media(max-width: 449px) {
      min-width: 98%;

      img {
        max-height: 240px;
      }

      span, p, b {
        font-size: 15px;
      }

     
    }

    @media(max-width: 449px) {
      h1 {
        white-space: wrap;
      }
    }
  }
`

export const ReviewsColumnsStyles = styled.div`
  box-sizing: border-box;
  padding: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.4); 
  color: #000;
  margin-left: 0;
  width: 100%;
`

