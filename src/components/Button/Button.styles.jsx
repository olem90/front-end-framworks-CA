import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;
  color: #000;
  background: white;
  box-shadow: 0 4px 3px rgba(0, 0, 0, 0.4); 
  transition: 0.6s ease-in-out;

  &:hover {
    color: #ff9900;
    border: none;
    background: rgb(75, 74, 72);
    width: 100%;
  }
`
export const AddToCartButton = styled.button`
  background: rgb(43, 40, 40);
  color: #ff9900;
  min-width: 100%;
  max-width: 480px;
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