import styled from "styled-components";

export const CartProductTemplate = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
`


export const CartStyles = styled.div`
  width: calc(100vw - 19px);
  box-sizing: border-box;

      img {
        
        min-width: 100%;
        max-width: 100px;
        min-height: 100%;
        max-height: 100px;
        object-fit: cover;
        border-radius: 5px;
      }
`

export const ProductQuantityButtons = styled.div`
  display: flex;
  background: none;
  margin-left: auto;
  margin-right: 100px;
  gap: 15px;
  align-items: center;
  justify-content: center; 
  
      button {
        color: #fff;
        font-weight: bold;
        background: #000;
        width: 30px;
        height: 30px;
        line-height: 30px;
        border-radius: 9px;
        border: none;
        outline: none;
        font-size: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
`