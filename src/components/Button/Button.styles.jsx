import styled from "styled-components";

export const ViewProductButton = styled.button`
  border: 1px solid gray;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  color: #000;
  background: white;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4); 
  transition: 0.5s ease-in-out;
  white-space: nowrap;
  margin-top: auto;
  width: 70%;


  &:hover {
    color: #ff9900;
    border: 1px solid gray;
    background: rgb(75, 74, 72);
    width: 100%;
  }

  @media(max-width: 669px) {
    color: #ff9900;
    border: 1px solid gray;
    background: rgb(75, 74, 72);
    width: 100%;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); 
    margin-bottom: 20px;
  }
`
export const AddToCartButton = styled.button`
  background: rgb(43, 40, 40);
  color: #ff9900;
  
  max-width: 380px;
  margin-top: 20px;
  padding: 12px;
  border: none;
  font-weight: bold;
  border-radius: 3px;
  transition: 0.12s ease-in-out;
  box-sizing: border-box;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.4); 

  &:hover {
    color: #fff;
  }
`

export const CheckoutSuccessButton = styled.button`
  background: #fff;
  color: #000;
  border: 1px solid black;
  margin-top: 45px;
  border-radius: 3px;
  font-size: 18px;
  padding: 10px;
  width: 50%;
  display: flex;
  justify-content: center;

  &:hover {
    color: green;
    border: none;
  }
`

export const CheckoutButton = styled.button`
  width: 50%;
  margin:30px 0 ;
  background: black;
  color: white;
  padding: 11px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4); 

  &:hover {
    color: #ff9900;
  }
`
export const BackToStoreButton = styled.button`
  border-radius: 5px;
  border: none;
  margin-top: 20px;
`

export const FormButton = styled.button`
  color: #fff;
  background: #000;
  border-radius: 5px;
  margin: auto;
  width: 100%; 
  
  @media(max-width: 400px) {
    height: 40px;
    margin: auto;
    width: 100%;     
  }
`